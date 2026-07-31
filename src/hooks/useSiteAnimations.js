import { useEffect, useRef, useCallback } from 'react'

export default function useSiteAnimations(deps = []) {
  const cleanupRef = useRef([])
  const rafRef = useRef(null)

  const cleanup = useCallback(() => {
    cleanupRef.current.forEach((fn) => {
      try { fn() } catch (_) {}
    })
    cleanupRef.current = []
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [])

  useEffect(() => {
    cleanup()

    const w = window
    const doc = document
    if (!w || !doc) return

    const prefersReduced = w.matchMedia('(prefers-reduced-motion: reduce)').matches
    const gsapReady = typeof w.gsap !== 'undefined'
    const stReady = typeof w.ScrollTrigger !== 'undefined'
    const splitReady = typeof w.SplitText !== 'undefined'

    if (gsapReady && stReady) {
      w.gsap.registerPlugin(w.ScrollTrigger)
      if (splitReady) w.gsap.registerPlugin(w.SplitText)
    }

    /* ---- 03. Sticky Header ---- */
    const stickyHeader = () => {
      const scroll = w.scrollY
      doc.querySelectorAll('.cs_sticky_header').forEach((el) => {
        el.classList.toggle('cs_sticky_active', scroll >= 10)
      })
    }
    w.addEventListener('scroll', stickyHeader, { passive: true })
    cleanupRef.current.push(() => w.removeEventListener('scroll', stickyHeader))

    /* ---- 04. Dynamic Background ---- */
    doc.querySelectorAll('[data-src]').forEach((el) => {
      const src = el.getAttribute('data-src')
      if (src) el.style.backgroundImage = `url(${src})`
    })

    /* ---- 07. Smooth Page Scroll (Lenis) ---- */
    if (typeof w.Lenis !== 'undefined' && !prefersReduced && !w.lenisInstance) {
      try {
        const lenis = new w.Lenis({
          duration: 1.2,
          smooth: true,
          smoothTouch: false,
          easing: (t) => 1 - Math.pow(1 - t, 3),
        })
        w.lenisInstance = lenis

        if (gsapReady && stReady) {
          lenis.on('scroll', w.ScrollTrigger.update)
          w.gsap.ticker.add((time) => { lenis.raf(time * 1000) })
          w.gsap.ticker.lagSmoothing(0)
        } else {
          const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf) }
          requestAnimationFrame(raf)
        }
      } catch (_) {}
    }

    /* ---- 08. Counter Animation (Odometer) ---- */
    if (typeof w.Odometer !== 'undefined') {
      const odometerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target
              const target = parseInt(el.getAttribute('data-count-to'), 10)
              if (!isNaN(target) && !el.classList.contains('odometer-initialized')) {
                try {
                  const odometer = new w.Odometer({
                    el,
                    value: 0,
                    format: 'd',
                    theme: 'default',
                  })
                  odometer.render()
                  odometer.update(target)
                  el.classList.add('odometer-initialized')
                } catch (_) {}
              }
              odometerObserver.unobserve(el)
            }
          })
        },
        { threshold: 0.3 }
      )
      doc.querySelectorAll('.odometer').forEach((el) => odometerObserver.observe(el))
      cleanupRef.current.push(() => odometerObserver.disconnect())
    }

    /* ---- 10. Review Ratings ---- */
    doc.querySelectorAll('.cs_rating').forEach((el) => {
      const review = el.getAttribute('data-rating')
      if (review) {
        const pct = review * 20 + '%'
        const bar = el.querySelector('.cs_rating_percentage')
        if (bar) bar.style.width = pct
      }
    })

    /* ---- 11. Tabs ---- */
    const tabLinks = doc.querySelectorAll('.cs_tab_links > li > a')
    const tabClickHandlers = []
    tabLinks.forEach((link) => {
      const handler = (e) => {
        e.preventDefault()
        const href = link.getAttribute('href')
        if (!href) return
        const target = doc.querySelector(href)
        if (target) {
          target.classList.add('active')
          const siblings = target.parentElement.children
          for (let i = 0; i < siblings.length; i++) {
            if (siblings[i] !== target) siblings[i].classList.remove('active')
          }
        }
        const li = link.closest('li')
        if (li) {
          li.classList.add('active')
          const liSiblings = li.parentElement.children
          for (let i = 0; i < liSiblings.length; i++) {
            if (liSiblings[i] !== li) liSiblings[i].classList.remove('active')
          }
        }
      }
      link.addEventListener('click', handler)
      tabClickHandlers.push({ el: link, handler })
    })
    cleanupRef.current.push(() => {
      tabClickHandlers.forEach(({ el, handler }) => el.removeEventListener('click', handler))
    })

    /* ---- 12. Accordion ---- */
    doc.querySelectorAll('.cs_accordian').forEach((acc) => {
      const body = acc.querySelector('.cs_accordian_body')
      if (body && !acc.classList.contains('active')) body.style.display = 'none'
    })
    const accordionHeads = doc.querySelectorAll('.cs_accordian_head')
    const accordionHandlers = []
    accordionHeads.forEach((head) => {
      const handler = () => {
        const acc = head.closest('.cs_accordian')
        if (!acc) return
        const body = head.nextElementSibling
        const siblings = acc.parentElement.children
        for (let i = 0; i < siblings.length; i++) {
          const sibBody = siblings[i].querySelector('.cs_accordian_body')
          if (sibBody) sibBody.style.display = 'none'
          siblings[i].classList.remove('active')
        }
        if (body) body.style.display = 'block'
        acc.classList.add('active')
      }
      head.addEventListener('click', handler)
      accordionHandlers.push({ el: head, handler })
    })
    cleanupRef.current.push(() => {
      accordionHandlers.forEach(({ el, handler }) => el.removeEventListener('click', handler))
    })

    /* ---- 13. Service Hover Tabs ---- */
    doc.querySelectorAll('.cs_service_section_3').forEach((section) => {
      const items = section.querySelectorAll('.cs_service_menu_item')
      const panes = section.querySelectorAll('.cs_service_pane')
      if (!items.length || !panes.length) return
      const handlers = []
      items.forEach((item, idx) => {
        const handler = () => {
          items.forEach((it) => it.classList.remove('cs_active'))
          item.classList.add('cs_active')
          panes.forEach((p) => p.classList.remove('cs_active'))
          panes[idx]?.classList.add('cs_active')
        }
        item.addEventListener('mouseenter', handler)
        item.addEventListener('focus', handler)
        handlers.push({ el: item, handler })
      })
      cleanupRef.current.push(() => {
        handlers.forEach(({ el, handler }) => {
          el.removeEventListener('mouseenter', handler)
          el.removeEventListener('focus', handler)
        })
      })
    })

    /* ---- 13b. Experts Hover Tabs ---- */
    doc.querySelectorAll('.cs_team_section_4').forEach((section) => {
      const items = section.querySelectorAll('.cs_expert_item')
      if (!items.length) return
      const handlers = []
      items.forEach((item) => {
        const handler = () => {
          const target = item.getAttribute('data-expert-tab')
          if (target) {
            const targetEl = section.querySelector(target)
            if (targetEl) {
              targetEl.classList.add('active')
              const sibs = targetEl.parentElement.children
              for (let i = 0; i < sibs.length; i++) {
                if (sibs[i] !== targetEl) sibs[i].classList.remove('active')
              }
            }
          }
          item.classList.add('active')
          const sibs = item.parentElement.children
          for (let i = 0; i < sibs.length; i++) {
            if (sibs[i] !== item) sibs[i].classList.remove('active')
          }
        }
        item.addEventListener('mouseenter', handler)
        item.addEventListener('focusin', handler)
        handlers.push({ el: item, handler })
      })
      cleanupRef.current.push(() => {
        handlers.forEach(({ el, handler }) => {
          el.removeEventListener('mouseenter', handler)
          el.removeEventListener('focusin', handler)
        })
      })
    })

    /* ---- 15. Hobble / Particle Move ---- */
    if (!prefersReduced) {
      doc.querySelectorAll('.cs_hobble').forEach((section) => {
        const target = section.querySelector('.cs_hobble_particle')
        if (!target) return
        let nextX = 0, nextY = 0, rafId = null
        const apply = () => {
          rafId = null
          target.style.setProperty('--mx', nextX.toFixed(3))
          target.style.setProperty('--my', nextY.toFixed(3))
        }
        const onMove = (e) => {
          const rect = section.getBoundingClientRect()
          nextX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
          nextY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
          if (rafId === null) rafId = requestAnimationFrame(apply)
        }
        const onLeave = () => {
          nextX = 0; nextY = 0
          if (rafId === null) rafId = requestAnimationFrame(apply)
        }
        section.addEventListener('mousemove', onMove)
        section.addEventListener('mouseleave', onLeave)
        cleanupRef.current.push(() => {
          section.removeEventListener('mousemove', onMove)
          section.removeEventListener('mouseleave', onLeave)
        })
      })
    }

    /* ---- 16. Section Title Word Reveal (GSAP + SplitText) ---- */
    if (gsapReady && stReady && splitReady && !prefersReduced) {
      const titles = doc.querySelectorAll('.cs_section_title')
      titles.forEach((title) => {
        try {
          const split = w.SplitText.create(title, {
            type: 'words',
            wordsClass: 'cs_reveal_word',
            autoSplit: true,
          })
          const tween = w.gsap.from(split.words, {
            opacity: 0,
            y: 24,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.08,
            paused: true,
          })
          const rect = title.getBoundingClientRect()
          const vh = w.innerHeight || doc.documentElement.clientHeight
          if (rect.top < vh && rect.bottom > 0) {
            tween.play()
          } else {
            w.ScrollTrigger.create({
              trigger: title,
              start: 'top 85%',
              once: true,
              onEnter: () => tween.play(),
            })
          }
        } catch (_) {}
      })
    }

    /* ---- 17. Sticky Card Animation ---- */
    if (!prefersReduced) {
      const OFFSET_TOP = 100
      const BREAKPOINT = 992
      const MIN_SCALE = 0.5
      const entries = []
      doc.querySelectorAll('.cs_sticky_section').forEach((section) => {
        const cards = Array.from(section.querySelectorAll('.cs_sticky_card'))
        if (cards.length < 2) return
        entries.push({ section, cards })
      })
      if (entries.length) {
        let isDesktop = w.innerWidth >= BREAKPOINT
        const applySticky = (enabled) => {
          entries.forEach((entry) => {
            entry.cards.forEach((card, i) => {
              if (enabled && i < entry.cards.length - 1) {
                card.style.position = 'sticky'
                card.style.top = OFFSET_TOP + 'px'
                card.style.willChange = 'transform, opacity'
              } else {
                card.style.position = ''
                card.style.top = ''
                card.style.transform = ''
                card.style.opacity = ''
                card.style.willChange = ''
              }
            })
          })
        }
        applySticky(isDesktop)
        let stickyRaf = null
        const tickSticky = () => {
          if (isDesktop) {
            const vh = w.innerHeight || doc.documentElement.clientHeight
            const animDist = vh - OFFSET_TOP
            entries.forEach((entry) => {
              const lastIdx = entry.cards.length - 1
              const sectionRect = entry.section.getBoundingClientRect()
              if (sectionRect.bottom < -50 || sectionRect.top > vh + 50) return
              for (let j = 0; j < lastIdx; j++) {
                const card = entry.cards[j]
                const nextTop = entry.cards[j + 1].getBoundingClientRect().top
                let progress = (vh - nextTop) / animDist
                progress = Math.max(0, Math.min(1, progress))
                const scale = 1 - (1 - MIN_SCALE) * progress
                card.style.transform = `scale(${scale})`
                card.style.opacity = 1 - progress
              }
            })
          }
          stickyRaf = requestAnimationFrame(tickSticky)
        }
        tickSticky()
        cleanupRef.current.push(() => {
          if (stickyRaf) cancelAnimationFrame(stickyRaf)
          applySticky(false)
        })
        let resizeTimer
        const onResize = () => {
          clearTimeout(resizeTimer)
          resizeTimer = setTimeout(() => {
            const nowDesktop = w.innerWidth >= BREAKPOINT
            if (nowDesktop !== isDesktop) {
              isDesktop = nowDesktop
              applySticky(isDesktop)
            }
          }, 150)
        }
        w.addEventListener('resize', onResize)
        cleanupRef.current.push(() => {
          w.removeEventListener('resize', onResize)
          clearTimeout(resizeTimer)
        })
      }
    }

    /* ---- 18. Parallax Image ---- */
    if (!prefersReduced) {
      const Y_RANGE = 20
      const SCALE = 1.15
      const pEntries = []
      doc.querySelectorAll('.cs_parallax').forEach((banner) => {
        const img = banner.querySelector(':scope > img, :scope > video')
        if (!img) return
        banner.style.overflow = 'hidden'
        banner.style.clipPath = banner.getAttribute('data-cs-revealed') === '1'
          ? 'inset(0% 0% 0% 0%)'
          : 'inset(100% 0% 0% 0%)'
        banner.style.transition = 'clip-path 1.1s cubic-bezier(0.22, 1, 0.36, 1)'
        img.style.willChange = 'transform'
        img.style.height = '100%'
        img.style.transformOrigin = 'center center'
        pEntries.push({ banner, img })
      })
      if (pEntries.length) {
        let pRaf = null
        const tickParallax = () => {
          const vh = w.innerHeight || doc.documentElement.clientHeight
          pEntries.forEach(({ banner, img }) => {
            const rect = banner.getBoundingClientRect()
            if (rect.bottom < -50 || rect.top > vh + 50) return
            const total = vh + rect.height
            const traversed = vh - rect.top
            let progress = traversed / total
            progress = Math.max(0, Math.min(1, progress))
            const yPct = -Y_RANGE + Y_RANGE * 2 * progress
            img.style.transform = `scale(${SCALE}) translate3d(0, ${yPct}%, 0)`
            if (banner.getAttribute('data-cs-revealed') !== '1' && rect.top < vh * 0.9) {
              banner.setAttribute('data-cs-revealed', '1')
              banner.style.clipPath = 'inset(0% 0% 0% 0%)'
            }
          })
          pRaf = requestAnimationFrame(tickParallax)
        }
        tickParallax()
        cleanupRef.current.push(() => { if (pRaf) cancelAnimationFrame(pRaf) })
      }
    }

    /* ---- 19. Pricing Toggle ---- */
    const pricingToggle = doc.getElementById('cs_billing_toggle')
    if (pricingToggle) {
      const handler = () => {
        const isYearly = pricingToggle.checked
        doc.querySelectorAll('.cs_pricing_toggle_label').forEach((lbl) => {
          lbl.classList.toggle('active', lbl.getAttribute('data-period') === (isYearly ? 'yearly' : 'monthly'))
        })
        doc.querySelectorAll('.cs_pricing_amount').forEach((amt) => {
          amt.textContent = isYearly ? amt.getAttribute('data-yearly') : amt.getAttribute('data-monthly')
        })
        doc.querySelectorAll('.cs_pricing_value small').forEach((s) => {
          s.textContent = isYearly ? '/ year' : '/ month'
        })
      }
      pricingToggle.addEventListener('change', handler)
      cleanupRef.current.push(() => pricingToggle.removeEventListener('change', handler))
      doc.querySelectorAll('.cs_pricing_toggle_label').forEach((lbl) => {
        const lblHandler = () => {
          const yearly = lbl.getAttribute('data-period') === 'yearly'
          pricingToggle.checked = yearly
          handler()
        }
        lbl.addEventListener('click', lblHandler)
        cleanupRef.current.push(() => lbl.removeEventListener('click', lblHandler))
      })
    }

    /* ---- 20. Packages Filter ---- */
    const pkgGrid = doc.getElementById('cs_packages_grid')
    if (pkgGrid) {
      const items = pkgGrid.querySelectorAll('.cs_package_item')
      const empty = pkgGrid.querySelector('.cs_packages_empty')
      const activeFilters = {}
      doc.querySelectorAll('.cs_filter_list').forEach((fl) => {
        activeFilters[fl.getAttribute('data-filter-group')] = 'all'
      })
      const applyFilters = () => {
        let visibleCount = 0
        items.forEach((item) => {
          const tokens = (item.getAttribute('data-filter') || '').split(/\s+/)
          let matched = true
          for (const [group, value] of Object.entries(activeFilters)) {
            if (value !== 'all' && !tokens.includes(value)) { matched = false; break }
          }
          item.style.display = matched ? '' : 'none'
          if (matched) visibleCount++
        })
        if (empty) empty.hidden = visibleCount !== 0
      }
      const filterBtns = doc.querySelectorAll('.cs_filter_list .cs_filter_btn')
      const filterHandlers = []
      filterBtns.forEach((btn) => {
        const handler = () => {
          const group = btn.closest('.cs_filter_list')?.getAttribute('data-filter-group')
          if (group) activeFilters[group] = btn.getAttribute('data-filter')
          btn.classList.add('active')
          const siblings = btn.closest('.cs_filter_list')?.querySelectorAll('.cs_filter_btn')
          siblings?.forEach((s) => { if (s !== btn) s.classList.remove('active') })
          applyFilters()
        }
        btn.addEventListener('click', handler)
        filterHandlers.push({ el: btn, handler })
      })
      cleanupRef.current.push(() => {
        filterHandlers.forEach(({ el, handler }) => el.removeEventListener('click', handler))
      })
    }

    /* ---- 22. Ecommerce ---- */
    doc.querySelectorAll('.cs_input_rating i').forEach((star) => {
      const handler = () => {
        const siblings = star.parentElement.querySelectorAll('i')
        let reached = false
        siblings.forEach((s) => {
          s.classList.toggle('fa-solid', reached)
          if (s === star) reached = true
        })
        star.classList.add('fa-solid')
      }
      star.addEventListener('click', handler)
      cleanupRef.current.push(() => star.removeEventListener('click', handler))
    })
    const checkAll = doc.getElementById('checkAll')
    if (checkAll) {
      const handler = () => {
        const checked = checkAll.checked
        doc.querySelectorAll('table input[type="checkbox"]').forEach((cb) => {
          cb.checked = checked
        })
      }
      checkAll.addEventListener('change', handler)
      cleanupRef.current.push(() => checkAll.removeEventListener('change', handler))
    }
    doc.querySelectorAll('.cs_increment').forEach((btn) => {
      const handler = () => {
        const countEl = btn.parentElement?.querySelector('.cs_quantity_input')
        if (!countEl) return
        let count = parseInt(countEl.textContent, 10) || 0
        count++
        countEl.textContent = count < 10 ? '0' + count : count
      }
      btn.addEventListener('click', handler)
      cleanupRef.current.push(() => btn.removeEventListener('click', handler))
    })
    doc.querySelectorAll('.cs_decrement').forEach((btn) => {
      const handler = () => {
        const countEl = btn.parentElement?.querySelector('.cs_quantity_input')
        if (!countEl) return
        let count = parseInt(countEl.textContent, 10) || 0
        if (count > 1) {
          count--
          countEl.textContent = count < 10 ? '0' + count : count
        }
      }
      btn.addEventListener('click', handler)
      cleanupRef.current.push(() => btn.removeEventListener('click', handler))
    })

    /* ---- Flatpickr date/time pickers ---- */
    if (typeof w.flatpickr !== 'undefined') {
      doc.querySelectorAll('.cs_datepicker').forEach((el) => {
        if (el._flatpickr) return
        try {
          const fp = w.flatpickr(el, {
            enableTime: false,
            dateFormat: el.getAttribute('data-format') || 'Y-m-d',
            disableMobile: true,
          })
          cleanupRef.current.push(() => { try { fp.destroy() } catch (_) {} })
        } catch (_) {}
      })
      doc.querySelectorAll('.cs_timepicker').forEach((el) => {
        if (el._flatpickr) return
        try {
          const fp = w.flatpickr(el, {
            enableTime: true,
            noCalendar: true,
            dateFormat: el.getAttribute('data-format') || 'H:i K',
            time_24hr: false,
            minuteIncrement: 1,
            disableMobile: true,
          })
          cleanupRef.current.push(() => { try { fp.destroy() } catch (_) {} })
        } catch (_) {}
      })
    }

    /* ---- Choices.js custom selects ---- */
    if (typeof w.Choices !== 'undefined') {
      doc.querySelectorAll('.cs_choice').forEach((el) => {
        if (el._choices) return
        try {
          const choice = new w.Choices(el, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false,
          })
          el._choices = choice
          cleanupRef.current.push(() => { try { choice.destroy() } catch (_) {} })
        } catch (_) {}
      })
    }

    /* ---- ScrollTrigger refresh on resize ---- */
    const onResizeRefresh = () => {
      if (stReady) w.ScrollTrigger.refresh()
    }
    w.addEventListener('resize', onResizeRefresh)
    cleanupRef.current.push(() => w.removeEventListener('resize', onResizeRefresh))

    return cleanup
  }, deps)
}
