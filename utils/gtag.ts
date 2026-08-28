/* eslint-disable @typescript-eslint/camelcase */
export const GA_TRACKING_ID = 'GTM-K5S8R8R7'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (typeof window.gtag !== 'function') return

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ eventName, parameter = undefined }) => {
  if (typeof window.gtag !== 'function') return

  window.gtag('event', eventName, {
    ...(parameter && parameter),
  })
}
