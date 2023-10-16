/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'leogadil.com'],
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  }
}
