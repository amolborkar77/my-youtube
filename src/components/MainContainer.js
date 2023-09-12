import React from "react";
import { VideoContainer } from "./VideoContainer";
import { ButtonList } from "./Button";

export const MainContainer = () => {
  return (
    <div className="col-span-11">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};
