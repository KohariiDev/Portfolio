// next.config.mjs
import withVideos from "next-videos";
import createBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  webpack(config, options) {
    return config;
  },
};

export default withBundleAnalyzer(withVideos(nextConfig));
