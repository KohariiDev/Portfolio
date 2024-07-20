import withVideos from "next-videos";
import createBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '5ygl4ncrmubeyvpo.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd34fm3rjhn7e1w.cloudfront.net',
        port: '',
        pathname: '/**',
      }
    ],
  },
  webpack(config, options) {
    return config;
  },
};

export default withBundleAnalyzer(withVideos(nextConfig));
