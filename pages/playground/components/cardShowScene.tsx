import React, { useState } from 'react'
import Image from 'next/image'
import InputAddItems from './inputAddItems';
type Props = {
  nameScene: string;
  userAvatar: string;
}

const CardShowScene = ({ nameScene, userAvatar }: Props) => {
  const [item1, setItem1] = useState("")
  const [item2, setItem2] = useState("")
  const [item3, setItem3] = useState("")
  const [item4, setItem4] = useState("")
  return (
    <div className="">
      <div className='text-2xl font-bold'>
        Your Scene 
        <span className='text-blue'> Demo</span>
      </div>
      <div className='w-full flex justify-center'>
        <div className=' p-3 relative h-[600px] w-[350px]   rounded-lg'>
          <div
            className={`bg-[url('/img/scene/sceneAroundNull.png')] h-[100%] bg-contain relative bg-no-repeat rounded-xl border-2 border-blue`}
          >
            <div className='z-10 absolute top-5 text-3xl font-bold w-full text-center drop-shadow-[0_5px_5px_rgba(255,0,135,0.9)] uppercase'>
              {nameScene}
            </div>
            <div className='top-1/3 absolute left-1/4 flex justify-center border-2 rounded-full overflow-hidden animate-bounce-slow border-mint drop-shadow-[0_5px_15px_rgba(76,197,224,0.9)]'>
              {userAvatar ? (
                <Image
                  src={userAvatar}
                  alt=""
                  width={150}
                  height={150}
                />
              ) : ""}
            </div>

            <div className='absolute top-[4rem] left-2  rounded-full p-2 animate-bounce-slow drop-shadow-[0_5px_15px_rgba(224,174,76,0.9)]'>
              <InputAddItems
                id={"item1"}
                iconColor={"text-mint"}
                currentImage={item1}
                onSetImageItem={setItem1}
              />
            </div>
            <div className='absolute top-[5rem] right-5  rounded-full p-2 animate-bounce-slow drop-shadow-[0_5px_15px_rgba(224,174,76,0.9)]'>
              <InputAddItems
                id={"item1"}
                iconColor={"text-mint"}
                currentImage={item2}
                onSetImageItem={setItem2}
              />
            </div>
            <div className='absolute bottom-[8rem] left-2  rounded-full p-2 animate-bounce-slow drop-shadow-[0_5px_15px_rgba(224,174,76,0.9)]'>
              <InputAddItems
                id={"item1"}
                iconColor={"text-mint"}
                currentImage={item3}
                onSetImageItem={setItem3}
              />
            </div>
            <div className='absolute bottom-[7rem] right-5  rounded-full p-2 animate-bounce-slow drop-shadow-[0_5px_15px_rgba(224,174,76,0.9)]'>
              <InputAddItems
                id={"item1"}
                iconColor={"text-mint"}
                currentImage={item4}
                onSetImageItem={setItem4}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardShowScene