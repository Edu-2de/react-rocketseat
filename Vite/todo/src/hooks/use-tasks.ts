import useLocalStorage from "use-local-storage";
import { TASK_KEY, type Task, TaskState } from "../models/task";

export const useTasks = () => {
	const [tasks] = useLocalStorage<Task[]>(TASK_KEY, []);

	return {
		tasks,
		tasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
		concludedTasksCount: tasks.filter((task) => task.concluded).length,
	};
};
