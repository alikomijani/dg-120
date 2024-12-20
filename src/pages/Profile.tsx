import { useProfileQuery } from "../api/auth.query";

type Props = {};

function Profile({}: Props) {
  const { data } = useProfileQuery();
  console.log(data);
  return <div>{data?.username}</div>;
}

export default Profile;
