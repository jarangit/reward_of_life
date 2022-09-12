import React from 'react'
import { ButtonPrimary } from '../../../components/elements/button'
import InputFileUpload from '../../../components/elements/input/inputFileUpload'
import InputPrimary from '../../../components/elements/input/inputPrimary'

type Props = {
  onChangeNameScene: any;
  onChangeUserAvatar:any;
}

const UserController = ({ onChangeNameScene, onChangeUserAvatar }: Props) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='text-2xl font-bold'>
        Create your scene
      </div>
      <div>
        <label htmlFor="title">Scene name</label>
        <InputPrimary
          type="text"
          placeholder='Your scene name'
          onChange={onChangeNameScene}
        />
      </div>
      <div>
        <InputFileUpload
          id="uploadUserAvatar"
          title="Upload your avatar"
          text="Click to upload your avatar only PNG file"
          onChangeUserAvatar={onChangeUserAvatar}
        />
      </div>
      <div >
        <ButtonPrimary text="Share" />
      </div>
    </div>
  )
}

export default UserController