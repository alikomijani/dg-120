import { Button } from "flowbite-react";
import { UserRound } from "lucide-react";
import { useAppSelector } from "../../../hooks";
import { isLoginSelector } from "../../../features/auth/auth.slice";
import { useNavigate } from "react-router-dom";

type Props = {};

function ProfileButton({}: Props) {
  const isLogin = useAppSelector(isLoginSelector);
  const navigate = useNavigate();
  const handleClick = () => {
    if (isLogin) {
      navigate("/profile");
    } else {
      navigate("/auth/login");
    }
  };
  return (
    <Button outline onClick={handleClick} size="xs">
      <UserRound />
    </Button>
  );
}

export default ProfileButton;
