/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/danis.abadia',
        permanent: true,
      },
    ]
  },
}


module.exports = nextConfig