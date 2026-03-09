import Text from "./components/text"
import trashIcon from './assets/icons/Trash.svg'

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
          <img src={trashIcon} alt="trash" className="fill-pink-base"/>
        </div>

      </div>
    </div>
  )
}


