/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com'],
  },
  async redirects() {
    return [
      {
        source: '/characters',
        destination: '/characters/page/1',
        permanent: true,
      },
    ]
  }
}