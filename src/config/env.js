const trimTrailingSlash = (value) => value.replace(/\/+$/, '')

const defaultApiBaseUrl = import.meta.env.PROD ? '/api' : 'http://localhost:5000/api'

export const API_BASE_URL = trimTrailingSlash(
  import.meta.env.VITE_API_BASE_URL || defaultApiBaseUrl
)

export const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || ''
