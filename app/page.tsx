import Main from "@/components/main";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-[85vw] h-[80vh] bg-gray-100 rounded-4xl shadow-md">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
