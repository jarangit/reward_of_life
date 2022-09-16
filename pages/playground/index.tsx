import React, { useState } from 'react'
import { ButtonPrimary } from '../../components/elements/button'
import ModalShowScene from '../../components/modal/modalShowScene'
import useModal from '../../hooks/useModal'
import CardShowScene from './components/cardShowScene'
import UserController from './components/userController'

type Props = {}

const PlaygroundPage = (props: Props) => {
  const [nameScene, setNameScene] = useState("")
  const [userAvatar, setUserAvatar] = useState("")
  return (
    <div className='grid grid-cols-4 min-h-screen main_container !mb-6 gap-6'>
      <div className='col-span-3 p-3 border border-white rounded-lg min-h-screen'>
        <CardShowScene
          nameScene={nameScene}
          userAvatar={userAvatar}
        />
      </div>
      <div className="col-span-1 border border-white rounded-lg p-3">
        <UserController
          onChangeNameScene={setNameScene}
          onChangeUserAvatar={setUserAvatar}
        />
      </div>
    </div>
  )
}

export default PlaygroundPage