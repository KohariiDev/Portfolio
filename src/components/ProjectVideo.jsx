"use client";

import React from "react";
import { usePathname } from "next/navigation";
import VideoInView from "@/hooks/useVideoInView";

const videoMapping = {
  iphone: "https://d34fm3rjhn7e1w.cloudfront.net/iphone/page-video.mp4",
  arlen: "https://d34fm3rjhn7e1w.cloudfront.net/arlen/page-video.mp4",
  podcastr: "https://d34fm3rjhn7e1w.cloudfront.net/podcastr/page-video.mp4",
};

const ProjectVideo = () => {
  const pathname = usePathname();
  const projectKey = pathname.split("/").pop();

  const videoSrc = videoMapping[projectKey];

  return <VideoInView src={videoSrc} className="h-full w-full object-cover" />;
};

export default ProjectVideo;
