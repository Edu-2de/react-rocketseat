import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { ButtonIcon } from "../components/button-icon";
import { Card } from "../components/card";
import { Container } from "../components/container";
import { Icon } from "../components/icon";
import { InputCheckbox } from "../components/input-checkbox";
import { InputText } from "../components/input-text";
import { Skeleton } from "../components/skeleton";
import Text from "../components/text";

import TrashIcon from "../assets/icons/Trash.svg?react";
import CheckIcon from "../assets/icons/Check.svg?react";
import ClipBoardIcon from "../assets/icons/ClipboardText.svg?react";
import PencilIcon from "../assets/icons/Pencil.svg?react";
import PlusIcon from "../assets/icons/Plus.svg?react";
import SpinnerIcon from "../assets/icons/Spinner.svg?react";
import XIcon from "../assets/icons/X.svg?react";

export const PageComponents = () => {
	return (
		<Container>
			<div className="flex flex-col gap-2">
				<Text variant={"body-sm-bold"} className="text-pink-dark">
					Olá mundo!
				</Text>

				<Text className="text-green-base">Olá mundo!</Text>
				<Text variant={"body-md-bold"}>Olá mundo!</Text>

				<div className="flex gap-1">
					<Icon svg={TrashIcon} className="fill-pink-base" />
					<Icon svg={CheckIcon} className="fill-green-base" />
					<Icon svg={PlusIcon} className="fill-green-base" />
					<Icon svg={SpinnerIcon} animate />
					<Icon svg={PencilIcon} className="fill-green-base" />
					<Icon svg={XIcon} className="fill-green-base" />
					<Icon svg={ClipBoardIcon} className="fill-pink-dark" />
				</div>

				<div className="flex gap-1 items-center">
					<Badge variant="secondary">5</Badge>
					<Badge variant="primary">2 de 5</Badge>
					<Badge loading> 5</Badge>
				</div>

				<div>
					<Button icon={PlusIcon}>Nova Tarefa</Button>
				</div>

				<div className="flex gap-1">
					<ButtonIcon icon={TrashIcon} />
					<ButtonIcon variant={"secondary"} icon={TrashIcon} />
					<ButtonIcon variant={"tertiary"} icon={TrashIcon} />
					<ButtonIcon loading icon={TrashIcon} />
				</div>

				<div>
					<InputText />
				</div>

				<div>
					<InputCheckbox />
					<InputCheckbox loading />
				</div>

				<div>
					<Card size="md">Olá mundo!</Card>
				</div>

				<div className="space-y-2">
					<Skeleton className="h-6" />
					<Skeleton className="h-6" />
					<Skeleton className="w-96 h-6" />
				</div>
			</div>
		</Container>
	);
};
