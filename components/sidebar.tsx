import { FaTasks } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="w-[20%] bg-gray-700 pl-10 pt-15 rounded-l-4xl text-white">
      <h2 className="text-3xl font-semibold mb-4">TaskFlow</h2>
      <div className="mb-4">
        <div className="flex items-center gap-4 p-2 text-lg font-light">
          <FaTasks />
          <p className="font-light">Tasks</p>
        </div>
        <div className="flex items-center gap-4 p-2 text-lg font-light">
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
