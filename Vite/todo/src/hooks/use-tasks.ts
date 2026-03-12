/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import useLocalStorage from "use-local-storage";
import { delay } from "../helpers/utils";
import { TASK_KEY, type Task, TaskState } from "../models/task";

export const useTasks = () => {
	const [tasksData] = useLocalStorage<Task[]>(TASK_KEY, []);
	const [tasks, setTasks] = React.useState<Task[]>([]);
	const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

	const fetchTasks = async () => {
		if (isLoadingTasks) {
			await delay(2000);
		}

		setIsLoadingTasks(false);

		setTasks(tasksData);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <a>
	React.useEffect(() => {
		fetchTasks();
	}, [tasksData]);

	return {
		tasks,
		tasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
		concludedTasksCount: tasks.filter((task) => task.concluded).length,
		isLoadingTasks,
	};
};
