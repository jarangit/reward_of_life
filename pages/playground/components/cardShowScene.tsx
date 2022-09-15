import React, { useState } from 'react'
import Image from 'next/image'
import InputAddItems from './inputAddItems';
import ModalSelectItemIcons from '../../../components/modal/modalSelectItemIcons';
import useModal from '../../../hooks/useModal';
import { BiImageAdd } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
type Props = {
  nameScene: string;
  userAvatar: string;
}

const CardShowScene = ({ nameScene, userAvatar }: Props) => {
  const [item1, setItem1] = useState("")
  const [item2, setItem2] = useState("")
  const [item3, setItem3] = useState("")
  const [item4, setItem4] = useState("")

  const { isShowModalSelectItemIcon, setIsShowModalSelectItemIcon } = useModal({
    status: false,
    action: () => "",
  })
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
              <div>
                {item1 ? (
                  <>
                    <Image
                      src={item1}
                      alt=""
                      width={90}
                      height={90}
                    />
                    <button onClick={() => setItem1("")}>
                      <AiOutlineCloseCircle size={20} />
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setIsShowModalSelectItemIcon({ status: true, action: setItem1 })}>
                      <BiImageAdd size={50} />
                    </button>

                  </>
                )}

              </div>
            </div>
            <div className='absolute top-[5rem] right-5  rounded-full p-2 animate-bounce-slow drop-shadow-[0_5px_15px_rgba(224,174,76,0.9)]'>
              <div>
                {item2 ? (
                  <>
                    <Image
                      src={item2}
                      alt=""
                      width={90}
                      height={90}
                    />
                    <button onClick={() => setItem2("")}>
                      <AiOutlineCloseCircle size={20} />
                    </button>
                  </>
                ) : (
                  <button onClick={() => setIsShowModalSelectItemIcon({ status: true, action: setItem2 })}>
                    <BiImageAdd size={50} />
                  </button>
                )}

              </div>
            </div>
            <div className='absolute bottom-[8rem] left-2  rounded-full p-2 animate-bounce-slow drop-shadow-[0_5px_15px_rgba(224,174,76,0.9)]'>
              <div>
                {item3 ? (
                  <>
                    <Image
                      src={item3}
                      alt=""
                      width={90}
                      height={90}
                    />
                    <button onClick={() => setItem3("")}>
                      <AiOutlineCloseCircle size={20} />
                    </button>
                  </>
                ) : (
                  <button onClick={() => setIsShowModalSelectItemIcon({ status: true, action: setItem3 })}>
                    <BiImageAdd size={50} />
                  </button>
                )}

              </div>
            </div>
            <div className='absolute bottom-[7rem] right-5  rounded-full p-2 animate-bounce-slow drop-shadow-[0_5px_15px_rgba(224,174,76,0.9)]'>
              <div>
                {item4 ? (
                  <>
                    <Image
                      src={item4}
                      alt=""
                      width={90}
                      height={90}
                    />
                    <button onClick={() => setItem4("")}>
                      <AiOutlineCloseCircle size={20} />
                    </button>
                  </>
                ) : (
                  <button onClick={() => setIsShowModalSelectItemIcon({ status: true, action: setItem4 })}>
                    <BiImageAdd size={50} />
                  </button>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
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