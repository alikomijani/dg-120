import { useProfileQuery } from "../api/auth.query";

type Props = {};

function Profile({}: Props) {
  const { data } = useProfileQuery();
  return <div>{data?.email}</div>;
}

export default Profile;
