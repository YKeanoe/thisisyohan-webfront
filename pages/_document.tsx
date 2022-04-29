import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import React, { ReactElement } from 'react'
import createEmotionCache from '@/utils/createEmotionCache';
import createEmotionServer from '@emotion/server/create-instance'

class ThisIsYohanDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);
  
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) =>
          function EnhanceApp(props) {
            return <App emotionCache={cache} {...props} />;
          },
      });
  
    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));
  
    return {
      ...initialProps,
      emotionStyleTags,
    };
  

    // const initialProps = await Document.getInitialProps(ctx)
    // return initialProps
  }

  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default ThisIsYohanDocument
