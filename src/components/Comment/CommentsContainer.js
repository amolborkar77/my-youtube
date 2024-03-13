import React from "react";

import { CommentsList } from "./CommentList";
import { COMMENTS_DATA } from "../Constants";

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={COMMENTS_DATA} />
    </div>
  );
};

export default CommentsContainer;
