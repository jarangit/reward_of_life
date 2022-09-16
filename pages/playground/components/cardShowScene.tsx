import React, { useRef, useState } from 'react'
import Image from 'next/image'
import InputAddItems from './inputAddItems';
import ModalSelectItemIcons from '../../../components/modal/modalSelectItemIcons';
import useModal from '../../../hooks/useModal';
import { BiImageAdd } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Card from './card';
import ModalShowScene from '../../../components/modal/modalShowScene';
type Props = {
  nameScene: string;
  userAvatar: string;
}

const CardShowScene = ({ nameScene, userAvatar }: Props) => {
  const [item1, setItem1] = useState("")
  const [item2, setItem2] = useState("")
  const [item3, setItem3] = useState("")
  const [item4, setItem4] = useState("")

  const { isShowModalSelectItemIcon, setIsShowModalSelectItemIcon, setIsShowModalShowScene, isShowModalShowScene } = useModal("")
  const componentExportImage: any = useRef()
  return (
    <div className="">
      <div className='text-2xl font-bold uppercase'>
        Your Card
        <span className='text-blue'> Demo</span>
      </div>
      {/* <div ref = {componentExportImage}> */}
      <Card
        // ref={componentExportImage}
        nameScene={nameScene}
        userAvatar={userAvatar}
        item1={item1}
        item2={item2}
        item3={item3}
        item4={item4}
        setItem1={setItem1}
        setItem2={setItem2}
        setItem3={setItem3}
        setItem4={setItem4}
        setIsShowModalSelectItemIcon={setIsShowModalSelectItemIcon}
      />
      {/* Modal */}

      {isShowModalSelectItemIcon.status && (
        <ModalSelectItemIcons
          isShow={isShowModalSelectItemIcon.status}
          hide={setIsShowModalSelectItemIcon}
          onSelect={isShowModalSelectItemIcon.action}
        />
      )}

    </div>
  )
}

export default CardShowScene