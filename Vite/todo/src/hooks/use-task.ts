import React from "react";
import useLocalStorage from "use-local-storage";
import { delay } from "../helpers/utils";
import { TASK_KEY, type Task, TaskState } from "../models/task";

export const useTask = () => {
	const [tasks, setTasks] = useLocalStorage<Task[]>(TASK_KEY, []);
	const [isUpdatingTask, setIsUpdatingTask] = React.useState(false);

	const prepareTask = () => {
		setTasks([
			...tasks,
			{
				id: Math.random().toString(36).substring(2, 9),
				title: "",
				state: TaskState.Creating,
			},
		]);
	};

	const updateTask = (id: string, playload: { title: Task["title"] }) => {
		setTasks(
			tasks.map((task) =>
				task.id === id
					? { ...task, state: TaskState.Created, ...playload }
					: task,
			),
		);
	};

	const updateTaskStatus = async (id: string, concluded: boolean) => {
		setIsUpdatingTask(true);

		await delay(1000);

		setTasks(
			tasks.map((task) => (task.id === id ? { ...task, concluded } : task)),
		);

		setIsUpdatingTask(false);
	};

	const deleteTask = (id: string) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return {
		prepareTask,
		updateTask,
		updateTaskStatus,
		deleteTask,
		isUpdatingTask,
	};
};
