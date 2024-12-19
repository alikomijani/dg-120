import { useParams } from "react-router-dom";
import { useProductCommentsQuery } from "../api/query";
import CommentForm from "./CommentForm";

type Props = {};

function CommentsSection({}: Props) {
  const { productId } = useParams();
  const {
    data: comments,
    isPending,
    isError,
  } = useProductCommentsQuery(productId!);
  if (isError) {
    return null;
  }
  if (isPending) {
    return <>loading</>;
  }
  return (
    <section className=" mt-4">
      <h1 className="text-lg font-bold m-4">نظرات کاربران</h1>
      <div className="flex gap-5">
        <CommentForm />
        <div className="flex-grow">
          {comments.map((comment) => (
            <div
              className="p-4 rounded-md border border-gray-400 shadow-md mt-4"
              key={comment.id}
            >
              <div>{comment.user}</div>
              <div>{comment.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommentsSection;
