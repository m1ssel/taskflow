import React from "react";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="w-[80%] px-10 pt-15 rounded-r-4xl border border-gray-300 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">Tasks</h2>
        <button className="bg-blue-500 p-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition duration-200 ease-in-out">
          Add Task
        </button>
      </div>
      <div>
        <div>
          <h3>Title</h3>
          <h3>Status</h3>
          <h3>Priority</h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
