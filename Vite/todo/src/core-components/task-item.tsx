import { cx } from "class-variance-authority";
import React from "react";
import CheckIcon from "../assets/icons/Check.svg?react";
import PencilIcon from "../assets/icons/Pencil.svg?react";
import TrashIcon from "../assets/icons/Trash.svg?react";
import XIcon from "../assets/icons/X.svg?react";
import { ButtonIcon } from "../components/button-icon";
import { Card } from "../components/card";
import { InputCheckbox } from "../components/input-checkbox";
import { InputText } from "../components/input-text";
import Text from "../components/text";
import { type Task, TaskState } from "../models/task";

interface TaskItemProps {
	task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
	const [isEditing, setIsEditing] = React.useState(
		task?.state === TaskState.Creating,
	);

	const [taskTitle, setTaskTitle] = React.useState("");

	const handleEditTask = () => {
		setIsEditing(true);
	};

	const handleExitEditTask = () => {
		setIsEditing(false);
	};

	const handleChangeTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTaskTitle(e.target.value || "");
	};

	const handleSaveTask = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({ id: task.id, title: taskTitle });
		setIsEditing(false);
	};

	return (
		<Card size="md">
			{!isEditing ? (
				<div className="flex items-center gap-4">
					<InputCheckbox
						value={task.concluded?.toString()}
						checked={task?.concluded}
					/>
					<Text
						className={cx("flex-1", {
							"line-through": task?.concluded,
						})}
					>
						{task?.title}
					</Text>
					<div className="flex gap-1">
						<ButtonIcon icon={TrashIcon} variant="tertiary" type="button" />
						<ButtonIcon
							onClick={handleEditTask}
							icon={PencilIcon}
							variant="tertiary"
							type="button"
						/>
					</div>
				</div>
			) : (
				<form onSubmit={handleSaveTask} className="flex items-center gap-4">
					<InputText
						className="flex-1"
						onChange={handleChangeTaskTitle}
						required
						autoFocus
					/>
					<div className="flex gap-1">
						<ButtonIcon
							onClick={handleExitEditTask}
							icon={XIcon}
							variant="secondary"
							type="button"
						/>
						<ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
					</div>
				</form>
			)}
		</Card>
	);
};
