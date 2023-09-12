import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./Comment/CommentsContainer";
import { LiveChat } from "./LiveChat";
import { Video } from "./Video";

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
