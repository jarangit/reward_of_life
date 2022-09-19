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
    <>
      <div className='hidden md:grid grid-cols-4 min-h-screen main_container !mb-6 gap-6'>
        <div className='col-span-3 p-3 border-r  min-h-screen'>
          <CardShowScene
            nameScene={nameScene}
            userAvatar={userAvatar}
          />
        </div>
        <div className="col-span-1   p-3">
          <UserController
            onChangeNameScene={setNameScene}
            onChangeUserAvatar={setUserAvatar}
          />
        </div>
      </div>

      <div className='md:hidden min-h-screen flex items-center p-6'>
        <div>
          Try again later since this website may not support mobile devices.
        </div>
      </div>
    </>
  )
}

export default PlaygroundPage