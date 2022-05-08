import HeadComponent, { Props as HeadProps } from '@/components/Head/Head'
import { globalStyles } from '@/styled/styles'
import createEmotionCache from '@/utils/createEmotionCache'
import { CacheProvider, EmotionCache } from '@emotion/react'
import Layout from 'layouts'
import App, { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      if (typeof window !== 'undefined') {
        if (!shallow) window.scrollTo(0, 0)
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const metatags: HeadProps['metatags'] = [
    // Default Global metatags
    {
      name: 'keywords',
      content:
        'Yohanes Keanoe, Fullstack Developer, Developer, Indonesia, Jakarta',
    },
  ]

  return (
    <CacheProvider value={emotionCache}>
      {globalStyles}

      <HeadComponent title="Yohanes Keanoe" metatags={metatags}>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#ffffff" />
      </HeadComponent>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  )
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
})

export default MyApp
