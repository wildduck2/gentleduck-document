import type { NextConfig } from 'next'

require('dotenv').config()

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  experimental: {
    externalDir: true,
  },

  /* config options here */
}

export default nextConfig
