"use client";

import React from "react";
import { usePathname } from "next/navigation";
import iphone from "../../public/videos/iphone/page-video.mp4";
import arlen from "../../public/videos/arlen/page-video.mp4";
import podcastr from "../../public/videos/podcastr/page-video.mp4";
import VideoInView from "@/hooks/useVideoInView";

const videoMapping = {
  iphone,
  arlen,
  podcastr,
};

const ProjectVideo = () => {
  const pathname = usePathname();
  const projectKey = pathname.split("/").pop();

  const videoSrc = videoMapping[projectKey];

  return <VideoInView src={videoSrc} className="h-full w-full object-cover" />;
};

export default ProjectVideo;
