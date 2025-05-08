import { FaTasks } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[20%] bg-gray-700 p-10 pt-15 rounded-l-4xl text-white">
      <h2 className="text-3xl font-semibold mb-4">TaskFlow</h2>
      <div className="mb-4">
        <div className="flex items-center gap-4 py-2 pl-4 text-lg font-light hover:bg-gray-600 transition duration-200 ease-in-out rounded-lg cursor-pointer">
          <FaTasks />
          <p className="font-light">Tasks</p>
        </div>
        <div className="flex items-center gap-4 py-2 pl-4 text-lg font-light hover:bg-gray-600 transition duration-200 ease-in-out rounded-lg cursor-pointer">
          <FaRegUser />
          <p>Profile</p>
        </div>
      </div>
      <div>
        <p className="text-lg">Statistics</p>
      </div>
    </div>
  );
};

export default Sidebar;
