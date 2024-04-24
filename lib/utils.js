import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getHumanReadableDate(timestamp) {
  const date = new Date(timestamp)
  const month = date.toLocaleString('default', { month: 'short' })
  const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  return `${month} ${date.getDate()} ${date.getFullYear()} at ${time}`
}
