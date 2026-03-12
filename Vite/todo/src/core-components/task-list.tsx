import PlusIcon from "../assets/icons/Plus.svg?react";
import { Button } from "../components/button";
import { useTask } from "../hooks/use-task";
import { useTasks } from "../hooks/use-tasks";
import { type Task, TaskState } from "../models/task";
import { TaskItem } from "./task-item";

export const TaskList = () => {
	const { tasks, isLoadingTasks } = useTasks();
	const { prepareTask } = useTask();

	console.log(tasks);

	const handleNewTask = () => {
		prepareTask();
	};

	return (
		<>
			<section>
				<Button
					icon={PlusIcon}
					className="w-full"
					onClick={handleNewTask}
					disabled={
						tasks.some((task) => task.state === TaskState.Creating) ||
						isLoadingTasks
					}
				>
					Nova Tarefa
				</Button>
			</section>
			<section className="space-y-2">
				{!isLoadingTasks &&
					tasks.map((task) => <TaskItem key={task.id} task={task} />)}
				{isLoadingTasks && (
					<>
						<TaskItem task={{} as Task} loading />
						<TaskItem task={{} as Task} loading />
						<TaskItem task={{} as Task} loading />
					</>
				)}
			</section>
		</>
	);
};
