"use client";

import type { Task } from "@/types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskFormModal from "./taskFormModal";

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleAddTask = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleSave = (task: Omit<Task, "id">, id?: string) => {
    if (id) {
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === id ? { ...t, ...task } : t))
      );
    } else {
      setTasks((prevTasks) => [...prevTasks, { ...task, id: uuidv4() }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="w-[80%] px-10 pt-15 rounded-r-4xl border border-gray-300 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">Tasks</h2>
        <button
          onClick={handleAddTask}
          className=" flex gap-3 py-3 px-4 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition duration-200 ease-in-out cursor-pointer"
        >
          <span>+</span>
          <span>Add Task</span>
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200 rounded-t-xl border-b border-gray-300">
            <th className="text-left w-[35%] py-4 px-4">Title</th>
            <th className="text-left w-[30%] px-4">Status</th>
            <th className="text-left w-[20%] px-4">Priority</th>
            <th className="w-full"></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="mx-4 border-b-2 border-gray-200">
              <td className="py-2 px-4">{task.title}</td>
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
                  {task.priority.charAt(0).toUpperCase() +
                    task.priority.slice(1)}
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
      </table>
      {isModalOpen && (
        <TaskFormModal
          initialData={editingTask}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
