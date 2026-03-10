import Text from "./components/text";
import { Icon } from "./components/icon"
import { Badge } from "./components/badge";
import { Button } from "./components/button";
import { ButtonIcon } from "./components/button-icon";

import TrashIcon from './assets/icons/Trash.svg?react';
import CheckIcon from './assets/icons/Check.svg?react';
import ClipBoardIcon from './assets/icons/ClipboardText.svg?react';
import PencilIcon from './assets/icons/Pencil.svg?react';
import PlusIcon from './assets/icons/Plus.svg?react';
import SpinnerIcon from './assets/icons/Spinner.svg?react';
import XIcon from './assets/icons/X.svg?react';

export default function App() {

  return (
    <div className="grid gap-3">
      <div className='flex flex-col gap-1'>

        <Text
          variant={'body-sm-bold'}
          className='text-pink-dark'
        >
          Olá mundo!
        </Text>

        <Text
          className='text-green-base'
        >
          Olá mundo!
        </Text>

        <Text
          variant={"body-md-bold"}
        >
          Olá mundo!
        </Text>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-pink-base" />
          <Icon svg={CheckIcon} className="fill-green-base" />
          <Icon svg={PlusIcon} className="fill-green-base" />
          <Icon svg={SpinnerIcon} animate/>
          <Icon svg={PencilIcon} className="fill-green-base" />
          <Icon svg={XIcon} className="fill-green-base" />
          <Icon svg={ClipBoardIcon} className="fill-pink-dark" />
        </div>

        <div>
          <Badge variant='secondary'>5</Badge>
          <Badge variant='primary'>2 de 5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>
        </div>

        <div>
          <ButtonIcon variant={"tertiary"} icon={TrashIcon} ></ButtonIcon>
        </div>

      </div>
    </div>
  )
}


