import { Global, css } from '@emotion/react'

const Fonts = css`
  @font-face {
    font-family: 'GeoSansLight';
    src: url('/assets/fonts/GeosansLight.woff2') format('woff2'),
      url('/assets/fonts/GeosansLight.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`

export const globalStyles = (
  <Global
    styles={css`
      ${Fonts}

      *, *::after, *::before {
        box-sizing: border-box;
      }

      html,
      body,
      #__next {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: #2b2d42;
      }

      html {
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-font-smoothing: antialiased;
        -ms-overflow-style: scrollbar;

        font-family: 'GeoSansLight', system-ui, sans-serif;

        &.disable-scroll {
          overflow-y: hidden;
        }
      }

      body {
        font-family: 'GeoSansLight', system-ui, sans-serif;
        font-size: 14px;

        @media (min-width: 768px) {
          font-size: 16px;
        }
      }

      a,
      a:hover,
      a:active,
      a:focus {
        color: inherit;
        text-decoration: none;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin: 0;
        font-weight: bold;
      }

      h1 {
        font-size: 3em;
      }

      h2 {
        font-size: 2.5em;
      }

      h3 {
        font-size: 1.5em;
      }

      h4 {
        font-size: 1em;
      }

      h5 {
        font-size: 0.5em;
      }

      input[type='number'] {
        -moz-appearance: textfield;
      }
    `}
  />
)
