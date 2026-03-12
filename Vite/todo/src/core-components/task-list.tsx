import PlusIcon from "../assets/icons/Plus.svg?react";
import { Button } from "../components/button";
import { TaskItem } from "./task-item";

export const TaskList = () => {
	return (
		<>
			<section>
				<Button icon={PlusIcon}>Nova Tarefa</Button>
			</section>
			<section className="space-y-2">
				<TaskItem />
				<TaskItem />
				<TaskItem />
				<TaskItem />
			</section>
		</>
	);
};
