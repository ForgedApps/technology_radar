import { type ClassValue, clsx } from 'clsx'

import config from '../../next.config.js'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function assetUrl(path: string) {
  let newPath = path
  if (/^https?:/.test(newPath)) return newPath
  if (!config.basePath) return newPath
  if (!newPath.startsWith('/')) newPath = `/${newPath}`
  return `${config.basePath}${newPath}`
}
