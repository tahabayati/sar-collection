/** @type {import('next').NextConfig} */
const nextConfig = {
  // simplest whitelist rule ― works for every path on picsum.photos
  images: {
    domains: ['picsum.photos'],
    // --- or, if you prefer remotePatterns:
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'picsum.photos', pathname: '/**' },
    // ],
  },
};

export default nextConfig;   // ✅ ESM export, not module.exports
