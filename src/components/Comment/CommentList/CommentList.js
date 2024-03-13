import Comment from "../Comment";

const CommentsList = ({ comments }) => {
  // dont use indexes as a key
  return comments.map((comment, index) => (
    <div className="border-l" key={index}>
      <Comment data={comment} />

      <div className="pl-5 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
