import { forwardRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Drop-in replacement for react-router's <Link>.
//
// React Router navigates from the `to` prop, not from the rendered href, so
// the UTM parameters that lib/tracking.js adds to the anchor's href on click
// would be ignored. This wrapper navigates to that tagged href instead, so
// in-app navigation carries the UTMs too. Rendered hrefs stay clean, so
// crawlers see no duplicate ?utm_ URLs.
const TrackedLink = forwardRef(function TrackedLink(
  { onClick, target, reloadDocument, replace, state, preventScrollReset, viewTransition, ...rest },
  ref,
) {
  const navigate = useNavigate()

  function handleClick(event) {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    if ((target && target !== '_self') || reloadDocument) return

    const url = new URL(event.currentTarget.href)
    if (url.origin !== window.location.origin || !url.searchParams.has('utm_source')) return

    const path = url.pathname + url.search + url.hash
    const current = window.location.pathname + window.location.search + window.location.hash
    event.preventDefault()
    navigate(path, {
      replace: replace ?? path === current,
      state,
      preventScrollReset,
      viewTransition,
    })
  }

  return (
    <Link
      ref={ref}
      target={target}
      reloadDocument={reloadDocument}
      replace={replace}
      state={state}
      preventScrollReset={preventScrollReset}
      viewTransition={viewTransition}
      onClick={handleClick}
      {...rest}
    />
  )
})

export default TrackedLink
