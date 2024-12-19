import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { Comment } from "../type";
import { useCommentMutation } from "../api/query";

type Props = {};

function CommentForm({}: Props) {
  const { productId } = useParams();
  const { mutate } = useCommentMutation({
    onError(error) {
      console.log(error);
    },
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    ) as unknown as Comment;
    mutate(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="productId" type="text" hidden defaultValue={productId} />
        <div>
          <label>
            <span>نام شما:</span>
            <input className="block w-[400px] mt-2" type="text" name="user" />
          </label>
        </div>
        <div className="mt-3">
          <label>
            <span>نظر شما:</span>
            <textarea className="block w-[400px] mt-2" name="text" />
          </label>
        </div>
        <button
          className="p-2 w-full border mt-3 bg-sky-300 hover:bg-sky-400 hover:text-white"
          type="submit"
        >
          ثبت نظر
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
