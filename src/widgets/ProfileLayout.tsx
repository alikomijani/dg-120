import { Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { isLoginSelector } from "../features/auth/auth.slice";
function ProfileLayout() {
  const isLogin = useAppSelector(isLoginSelector);
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProfileLayout;
