import { useStyleContext } from '../StyleContext'
import type { KeyType } from '../Cache'

export default function useClientCache<CacheType>(
  prefix: string,
  keyPath: KeyType[],
  _cacheFn: () => CacheType,
  _onCacheRemove?: (cache: CacheType, fromHMR: boolean) => void,
): CacheType {
  const { cache: globalCache } = useStyleContext()
  const fullPath = [prefix, ...keyPath]
  //
  // const HMRUpdate = useHMR()
  //
  // // Create cache
  // React.useMemo(
  //   () => {
  //     globalCache.update(fullPath, (prevCache) => {
  //       const [times = 0, cache] = prevCache || []
  //
  //       // HMR should always ignore cache since developer may change it
  //       let tmpCache = cache
  //       if (process.env.NODE_ENV !== 'production' && cache && HMRUpdate) {
  //         onCacheRemove?.(tmpCache, HMRUpdate)
  //         tmpCache = null
  //       }
  //
  //       const mergedCache = tmpCache || cacheFn()
  //
  //       return [times + 1, mergedCache]
  //     })
  //   },
  //   [fullPath.join('_')],
  // )
  //
  // // Remove if no need anymore
  // React.useEffect(
  //   () => () => {
  //     globalCache.update(fullPath, (prevCache) => {
  //       const [times = 0, cache] = prevCache || []
  //       const nextCount = times - 1
  //
  //       if (nextCount === 0) {
  //         onCacheRemove?.(cache, false)
  //         return null
  //       }
  //
  //       return [times - 1, cache]
  //     })
  //   },
  //   fullPath,
  // )

  return globalCache.get(fullPath)![1]
}
