import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { isLoginSelector } from "../../features/auth/auth.slice";
import { useEffect } from "react";
function ProfileLayout() {
  const isLogin = useAppSelector(isLoginSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/auth/login");
    }
  }, [isLogin]);
  return (
    <div className="flex">
      <aside className="w-[400px] mx-4">side bar</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ProfileLayout;
