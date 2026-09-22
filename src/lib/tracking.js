// Site-wide button tracking for Google Tag Manager.
//
// One delegated click listener covers every <button>, <a>, submit input and
// role="button" element on the site (including ones added later), so no
// individual button needs wiring. On each click it:
//   1. builds UTM parameters for that button,
//   2. tags the button's link URL with them (see TAG_LINK_URLS),
//   3. pushes a `button_click` event to window.dataLayer for GTM.
//
// To name a button explicitly (instead of using its visible text), add
// data-track-name="hero-get-quote" to it. That becomes utm_content.

const UTM_SOURCE = 'medicuretrip_website'
const UTM_MEDIUM = 'button'
const EVENT_NAME = 'button_click'

// Set to false to keep URLs clean and only send the dataLayer event.
const TAG_LINK_URLS = true

const CLICKABLE = 'a[href], button, input[type="button"], input[type="submit"], input[type="reset"], [role="button"]'

const slug = (value) =>
  String(value || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)

const clean = (value) => String(value || '').replace(/\s+/g, ' ').trim()

const pageSlug = () => slug(window.location.pathname) || 'home'

// Best human-readable name for the element, in priority order. Non-Latin
// labels slug to '' and fall through to the next candidate.
function describeButton(el) {
  const icon = el.querySelector('i[class*="fa-"]')
  const iconName = icon && [...icon.classList].find((c) => /^fa-(?!solid|regular|brands|light|fw)/.test(c))
  const candidates = [
    el.getAttribute('data-track-name'),
    clean(el.textContent),
    el.getAttribute('aria-label'),
    el.getAttribute('title'),
    el.querySelector('img[alt]')?.getAttribute('alt'),
    el.value,
    iconName && iconName.replace(/^fa-/, ''),
    el.id,
    el.getAttribute('name'),
    el.getAttribute('href'),
  ]
  for (const candidate of candidates) {
    const s = slug(candidate)
    if (s) return { text: clean(candidate).slice(0, 100), slug: s }
  }
  return { text: '', slug: `${el.tagName.toLowerCase()}-click` }
}

function categorize(el, href) {
  if (el.matches('button[type="submit"], input[type="submit"]')) return 'form_submit'
  if (el.tagName !== 'A') return 'button'
  if (!href) return 'link'
  if (href.startsWith('tel:')) return 'phone'
  if (href.startsWith('mailto:')) return 'email'
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return 'whatsapp'
  return 'link'
}

function locate(el) {
  if (el.closest('.cs_whatsapp_float, .cs_scrollup_btn')) return 'floating'
  if (el.closest('header')) return 'header'
  if (el.closest('footer')) return 'footer'
  if (el.closest('main')) return 'main'
  return 'other'
}

// Returns the anchor's absolute URL with UTM parameters, or null when the
// link must be left alone (in-page anchors, tel:, mailto:, javascript:...).
function tagUrl(anchor, utm) {
  const raw = anchor.getAttribute('href') || ''
  if (!raw || raw.startsWith('#')) return null
  let url
  try {
    url = new URL(anchor.href, window.location.href)
  } catch {
    return null
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null
  Object.entries(utm).forEach(([key, value]) => url.searchParams.set(key, value))
  return url
}

function onClick(event) {
  try {
    const el = event.target instanceof Element ? event.target.closest(CLICKABLE) : null
    if (!el || el.disabled || el.getAttribute('aria-disabled') === 'true') return

    const label = describeButton(el)
    const utm = {
      utm_source: UTM_SOURCE,
      utm_medium: UTM_MEDIUM,
      utm_campaign: pageSlug(),
      utm_content: label.slug,
    }

    const isAnchor = el.tagName === 'A'
    let destination = isAnchor ? el.getAttribute('href') : ''
    if (isAnchor && TAG_LINK_URLS) {
      const tagged = tagUrl(el, utm)
      if (tagged) {
        el.href = tagged.toString()
        destination = tagged.toString()
      }
    }

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: EVENT_NAME,
      button_text: label.text,
      button_id: el.id || '',
      button_type: categorize(el, el.getAttribute('href') || ''),
      button_url: destination,
      button_location: locate(el),
      button_section: el.closest('section[id]')?.id || '',
      page_path: window.location.pathname,
      page_title: document.title,
      ...utm,
    })
  } catch (err) {
    // Tracking must never break the page.
    console.warn('[tracking] click handler failed:', err)
  }
}

export function initButtonTracking() {
  if (typeof document === 'undefined' || window.__buttonTrackingReady) return
  window.__buttonTrackingReady = true
  // Capture phase so we run before any component handler that might
  // stop propagation or navigate away.
  document.addEventListener('click', onClick, true)
}
