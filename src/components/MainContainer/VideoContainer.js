import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { YOUTUBE_VIDEOS_API } from "../../utils/constants";
import { VideoCard } from "./VideoCard";

export const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
    };

    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos &&
        videos.map((video) => (
          <Link to={"watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
    </div>
  );
};
