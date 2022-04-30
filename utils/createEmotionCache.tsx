import createCache from '@emotion/cache'

const createEmotionCache = () => {
  return createCache({ key: 'thisisyohan', prepend: true })
}

export default createEmotionCache
