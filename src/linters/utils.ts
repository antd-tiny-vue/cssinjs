import devWarning from '../utils/warning'
import type { LinterInfo } from './interface'

export function lintWarning(message: string, info: LinterInfo) {
  const { path, parentSelectors } = info

  devWarning(
    false,
    `[Ant Design CSS-in-JS] ${path ? `Error in '${path}': ` : ''}${message}${
      parentSelectors.length
        ? ` Selector info: ${parentSelectors.join(' -> ')})`
        : ''
    }`,
  )
}
