import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = await auth();
  if (!session) redirect("/sign-in");

  return <div>Profile</div>;
};

export default Profile;
