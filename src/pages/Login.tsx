import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button, Label, TextInput } from "flowbite-react";
import { useLoginMutation } from "../api/auth.query";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { login } from "../features/auth/auth.slice";
const LoginSchema = z.object({
  email: z.string({
    required_error: "نام کاربری رو بده دیگه",
  }),

  password: z.string({
    required_error: "پسوردت یادت رفته وارد کنی جلبک",
  }),
});
interface LoginData {
  email: string;
  password: string;
}
function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { mutate } = useLoginMutation({
    onSuccess(data) {
      dispatch(login(data));
      navigate("/profile");
    },
    onError(error) {
      console.log(error);
    },
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit: SubmitHandler<LoginData> = (data) => {
    mutate(data);
  };
  return (
    <div className="container mx-auto">
      <div className="w-[400px] h-svh flex flex-col justify-center items-center mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-5"
        >
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email4"
                color={errors.email ? "failure" : "default"}
                value="ایمیل"
              />
            </div>
            <TextInput
              id="email4"
              placeholder="ایمیل"
              required
              color={errors.email ? "failure" : "gray"}
              className="w-full"
              {...register("email")}
              helperText={
                errors.email?.message && (
                  <>
                    <span className="font-medium">Oops!</span>
                    {errors.email?.message}
                  </>
                )
              }
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password"
                color={errors.password ? "failure" : "default"}
                value="گذرواژه"
              />
            </div>
            <TextInput
              id="password"
              className="w-full"
              {...register("password")}
              placeholder="گذرواژه"
              required
              color={errors.password ? "failure" : "gray"}
              helperText={
                errors.password?.message && (
                  <>
                    <span className="font-medium">Oops!</span>
                    {errors.password?.message}
                  </>
                )
              }
            />
          </div>
          <Button type="submit">ورود</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
