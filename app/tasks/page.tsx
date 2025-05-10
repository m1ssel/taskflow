"use client";

import TableContent from "@/components/tableContent";
import TaskFormModal from "@/components/taskFormModal";
import type { Task } from "@/types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Tasks = () => {
  const [, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleAddTask = () => {
    setEditingTask(null);
    setIsModalOpen(true);
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
    <div>
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
        <TableContent />
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

export default Tasks;
