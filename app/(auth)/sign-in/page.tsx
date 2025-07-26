import { auth } from "@/app/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Sign In
        </h2>
        <form
          className="space-y-4"
          action={async (formData) => {
            "use server";
            await executeAction({
              actionFn: async () => {
                await signIn("credentials", formData);
              },
            });
          }}
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-md font-medium transition"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-purple-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
