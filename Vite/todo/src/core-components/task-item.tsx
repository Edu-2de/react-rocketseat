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

export const TaskItem = () => {
	const [isEditing, setIsEditing] = React.useState(false);

	const handlingEditTask = () => {
		setIsEditing(true);
	};

	const handlingExitEditTask = () => {
		setIsEditing(false);
	};

	return (
		<Card size="md" className="flex items-center gap-4">
			{!isEditing ? (
				<>
					<InputCheckbox />
					<Text className="flex-1">Fazer compras da semana</Text>
					<div className="flex gap-1">
						<ButtonIcon icon={TrashIcon} variant="tertiary" />
						<ButtonIcon
							onClick={handlingEditTask}
							icon={PencilIcon}
							variant="tertiary"
						/>
					</div>
				</>
			) : (
				<>
					<InputText className="flex-1" />
					<div className="flex gap-1">
						<ButtonIcon
							onClick={handlingExitEditTask}
							icon={XIcon}
							variant="secondary"
						/>
						<ButtonIcon icon={CheckIcon} variant="primary" />
					</div>
				</>
			)}
		</Card>
	);
};
