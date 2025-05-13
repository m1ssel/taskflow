import { atom } from "jotai";
import type { Task } from "@/types";

export const titleAtom = atom("");
export const descriptionAtom = atom("");
export const statusAtom = atom<"todo" | "in_progress" | "done">("todo");
export const priorityAtom = atom<"low" | "medium" | "high">("medium");
export const tasksAtom = atom<Task[]>([]);
export const isModalOpenAtom = atom(false);
export const editingTaskAtom = atom<Task | null>(null);
