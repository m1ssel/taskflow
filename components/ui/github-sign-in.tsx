import { signIn } from "@/app/lib/auth";
import { FaGithub } from "react-icons/fa";

const GithubSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button className="w-full">
        <FaGithub />
        Continue with GitHub
      </button>
    </form>
  );
};

export default GithubSignIn;
