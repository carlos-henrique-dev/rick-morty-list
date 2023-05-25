/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_HOST],
  },
}

module.exports = nextConfig
