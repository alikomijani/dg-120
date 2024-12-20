import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
import { CreateCommentData } from "../type";
import { useCommentMutation } from "../api/query";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
const commentSchema = z.object({
  productId: z.string({
    required_error: "productId is required",
    invalid_type_error: "productId must be a string",
  }),
  text: z
    .string({
      required_error: "text is required",
      invalid_type_error: "text must be a string",
    })
    .min(10, "حداقل ۱۰ کارکتر وارد کنید"),
  user: z
    .string({
      required_error: "user is required",
      invalid_type_error: "user must be a string",
    })
    .min(10, "حداقل ۱۰ کارکتر وارد کنید"),
});
type Props = {};

function CommentForm({}: Props) {
  const { productId } = useParams();
  const { mutate } = useCommentMutation({
    onError(error) {
      console.log(error);
    },
  });
  const { register, handleSubmit, formState } = useForm<CreateCommentData>({
    defaultValues: {
      productId: productId,
    },
    resolver: zodResolver(commentSchema),
  });
  const onSubmit: SubmitHandler<CreateCommentData> = (commentData) => {
    mutate(commentData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" hidden {...register("productId")} />
        <div>
          <label>
            <span>نام شما:</span>
            <input
              className="block w-[400px] mt-2"
              type="text"
              {...register("user")}
            />
          </label>
          {!!formState.errors.user && (
            <span className="text-red-500">
              {formState.errors.user.message}
            </span>
          )}
        </div>
        <div className="mt-3">
          <label>
            <span>نظر شما:</span>
            <textarea className="block w-[400px] mt-2" {...register("text")} />
          </label>
          {!!formState.errors.text && (
            <span className="text-red-500">
              {formState.errors.text.message}
            </span>
          )}
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
