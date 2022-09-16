import React, { createRef, useRef } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { ButtonPrimary } from '../../../components/elements/button'
import InputFileUpload from '../../../components/elements/input/inputFileUpload'
import InputPrimary from '../../../components/elements/input/inputPrimary'
import ModalShowScene from '../../../components/modal/modalShowScene'
import useModal from '../../../hooks/useModal'

type Props = {
  onChangeNameScene: any;
  onChangeUserAvatar: any;
}

const UserController = ({ onChangeNameScene, onChangeUserAvatar }: Props) => {
  const { isShowModalShowScene, setIsShowModalShowScene } = useModal("")
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
      <div className='flex gap-2'>
        <ButtonPrimary text="Share" onClick={() => setIsShowModalShowScene({ status: true, action: () => console.log("hi") })} />
        {/* <ButtonPrimary text="Preview" /> */}
      </div>
      {isShowModalShowScene.status && (
        <ModalShowScene isShow={isShowModalShowScene.status} hide={setIsShowModalShowScene} onSelect={undefined} >
          <div>
            <div className='text-right'>
              <button onClick={() => setIsShowModalShowScene({status:false, action: () => ""})}>
                <AiOutlineCloseCircle size={20} />
              </button>
            </div>
            <div>
              Can't share right now. this process evolving
            </div>
          </div>
        </ModalShowScene>
      )}
    </div>
  )
}

export default UserController