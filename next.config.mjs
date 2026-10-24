/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Placeholder photos. Remove once every city uses images from /public.
    remotePatterns: [new URL("https://picsum.photos/**")],
  },
  async redirects() {
    return [{ source: "/", destination: "/travel", permanent: false }];
  },
};

export default nextConfig;
