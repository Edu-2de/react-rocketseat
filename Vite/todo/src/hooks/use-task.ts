import useLocalStorage from "use-local-storage";
import { TASK_KEY, type Task, TaskState } from "../models/task";

export const useTask = () => {
	const [tasks, setTasks] = useLocalStorage<Task[]>(TASK_KEY, []);

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

	const updateTaskStatus = (id: string, concluded: boolean) => {
		setTasks(
			tasks.map((task) => (task.id === id ? { ...task, concluded } : task)),
		);
	};

	const deleteTask = (id: string) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return {
		prepareTask,
		updateTask,
		updateTaskStatus,
		deleteTask
	};
};
