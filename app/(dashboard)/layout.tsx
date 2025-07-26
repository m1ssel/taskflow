import Sidebar from "@/components/sidebar";
import React from "react";
import { auth } from "../lib/auth";
import { redirect } from "next/navigation";

const Dashboard = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) redirect("/sign-in");
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-[85vw] h-[80vh] bg-gray-100 rounded-4xl shadow-md">
        <Sidebar />
        <div className="w-[80%] px-10 py-15 rounded-r-4xl border border-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
