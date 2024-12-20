import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button, Label, TextInput } from "flowbite-react";
import { useLoginMutation } from "../api/auth.query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { redirect, useNavigate } from "react-router-dom";
const LoginSchema = z.object({
  username: z.string({
    required_error: "نام کاربری رو بده دیگه",
  }),

  password: z.string({
    required_error: "پسوردت یادت رفته وارد کنی جلبک",
  }),
});
interface LoginData {
  username: string;
  password: string;
}
function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const { mutate } = useLoginMutation({
    onSuccess(data) {
      login(data);
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
                htmlFor="username4"
                color={errors.username ? "failure" : "default"}
                value="نام کاربری"
              />
            </div>
            <TextInput
              id="username4"
              placeholder="نام کاربری"
              required
              color={errors.username ? "failure" : "gray"}
              className="w-full"
              {...register("username")}
              helperText={
                errors.username?.message && (
                  <>
                    <span className="font-medium">Oops!</span>
                    {errors.username?.message}
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
