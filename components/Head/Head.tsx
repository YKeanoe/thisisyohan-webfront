import Head from 'next/head'

interface Metatags {
  [key: string]: string | number
}

export interface Props {
  title?: string | number
  metatags?: Metatags[]
  options?: {
    sitename?: boolean
    seperator?: string
    socialtitle?: boolean
  }
  children?: JSX.Element | JSX.Element[] | string | string[]
}

const HeadComponent: React.FC<Props> = ({
  title,
  children,
  metatags = [],
  options = {},
}) => {
  const {
    sitename = true,
    seperator = ' | ',
    socialtitle = true,
  } = options

  const printTitle =
    (title ? title : '') + (sitename ? `${seperator}ThisIsYohan` : '')

  return (
    <Head>
      {title && (
        <>
          <title key="document-title">{printTitle}</title>

          {socialtitle ? (
            <meta
              property="og:title"
              content={printTitle}
              key="og:title"
            />
          ) : (
            ''
          )}

          {socialtitle ? (
            <meta
              name="twitter:title"
              content={printTitle}
              key="twitter:title"
            />
          ) : (
            ''
          )}
        </>
      )}

      {metatags.map((meta) => (
        <meta {...meta} key={meta.name ? meta.name : meta.property} />
      ))}

      {children}
    </Head>
  )
}

export default HeadComponent
