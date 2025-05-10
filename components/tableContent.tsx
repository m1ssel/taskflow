"use client";

import type { Task } from "@/types";
import { useState } from "react";

const TableContent = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [, setIsModalOpen] = useState(false);
  const [, setEditingTask] = useState<Task | null>(null);

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };
  const handleDelete = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  return (
    <tbody>
      {tasks.map((task) => (
        <tr key={task.id} className="mx-4 border-b-2 border-gray-200">
          <td className="py-2 px-4">
            <h3 className="cursor-pointer group relative">
              {task.title}{" "}
              <span className="absolute left-0 mt-3 break-words max-w-[100%] bg-gray-100 border border-gray-300 rounded-md p-2 text-sm text-gray-700 hidden group-hover:flex transition-opacity z-10">
                {task.description}
              </span>
            </h3>
          </td>
          <td className="py-2 px-4">
            <span
              className={`py-1 px-2 rounded-md ${
                {
                  todo: "bg-blue-300",
                  in_progress: "bg-amber-300",
                  done: "bg-emerald-300",
                }[task.status]
              }`}
            >
              {
                {
                  todo: "To Do",
                  in_progress: "In Progress",
                  done: "Done",
                }[task.status]
              }
            </span>
          </td>
          <td className="py-2 px-4">
            <span
              className={`py-1 px-2 rounded-md ${
                {
                  low: "bg-green-300 ",
                  medium: "bg-orange-300",
                  high: "bg-red-300",
                }[task.priority]
              }`}
            >
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </span>
          </td>
          <td className="text-right flex gap-5 py-2 px-4">
            <button
              onClick={() => handleEditTask(task)}
              className="border px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-300 hover:border-black transition duration-200 ease-in-out"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task.id)}
              className="px-3 py-1 rounded-lg cursor-pointer text-white bg-gray-600 hover:bg-gray-800 transition duration-200 ease-in-out"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableContent;
