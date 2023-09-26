import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { CommentsContainer } from "./Comment";
import { LiveChat } from "./LiveChat";
import { Video } from "./Video";
import { closeMenu } from "../utils/appSlice";

export const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex">
        <Video />

        <LiveChat />
      </div>

      <CommentsContainer />
    </div>
  );
};
