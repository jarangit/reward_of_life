import React, { useRef, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiImageAdd } from 'react-icons/bi'
import Image from 'next/image'

type Props = {
  nameScene: string;
  userAvatar: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  setItem1: any;
  setItem2: any;
  setItem3: any;
  setItem4: any;
  setIsShowModalSelectItemIcon: any;

}

const Card = ({
  nameScene,
  userAvatar,
  item1,
  item2,
  item3,
  item4,
  setItem1,
  setItem2,
  setItem3,
  setItem4,
  setIsShowModalSelectItemIcon,
}: Props) => {
  const [mode, setMode] = useState("edit")
  return (
    <>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='flex gap-3'>
          <div className={`${mode == "edit" ? "text-blue" : ""} cursor-pointer`}
            onClick={() => setMode("edit")}
          >Edit</div>
          <div className={`${mode == "preview" ? "text-blue" : ""} cursor-pointer`}
            onClick={() => setMode("preview")}
          >Preview</div>
        </div>
        <div className=' p-3 relative h-[600px] w-[350px]   rounded-lg'>
          <div
            className={`bg-[url('/img/scene/sceneAroundNull.png')] h-[100%] bg-contain relative bg-no-repeat rounded-xl border-2 border-blue`}
          >
            <div className='z-10 absolute top-5 text-3xl font-bold w-full text-center drop-shadow-[0_5px_5px_rgba(255,0,135,0.9)] uppercase'>
              {nameScene}
            </div>
            <div className={`top-1/3 absolute left-1/4 flex justify-center border-2 rounded-full overflow-hidden  border-mint drop-shadow-[0_5px_15px_rgba(76,197,224,0.9)] ${mode === "edit" ? "animate-bounce-slow":""}`}>
              {userAvatar ? (
                <Image
                  src={userAvatar}
                  alt=""
                  width={150}
                  height={150}
                />
              ) : ""}
            </div>

            <div className='absolute top-[4rem] left-2 rounded-full p-2 animate-bounce-slow drop-shadow-[0_5px_15px_rgba(224,174,76,0.9)]'>
              <div>
                {item1 ? (
                  <>
                    <div className='relative w-[90px] h-[90px]'>
                      <Image
                        src={item1}
                        alt=""
                        width={200}
                        height={200}
                        layout="fill"
                        objectFit='contain'
                      />
                    </div>
                    <button onClick={() => setItem1("")} className = {`${mode == 'edit' ? "":"hidden"}`}>
                      <AiOutlineCloseCircle size={20} />
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setIsShowModalSelectItemIcon({ status: true, action: setItem1 })}   className = {`${mode == 'edit' ? "":"hidden"}`}>
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
                    <div className='relative w-[90px] h-[90px]'>

                      <Image
                        src={item2}
                        alt=""
                        width={90}
                        height={90}
                        layout="fill"
                        objectFit='contain'
                      />
                    </div>
                    <button onClick={() => setItem2("")} className = {`${mode == 'edit' ? "":"hidden"}`}>
                      <AiOutlineCloseCircle size={20} />
                    </button>
                  </>
                ) : (
                  <button onClick={() => setIsShowModalSelectItemIcon({ status: true, action: setItem2 })}  className = {`${mode == 'edit' ? "":"hidden"}`}>
                    <BiImageAdd size={50} />
                  </button>
                )}

              </div>
            </div>
            <div className='absolute bottom-[8rem] left-2  rounded-full p-2 animate-bounce-slow drop-shadow-[0_5px_15px_rgba(224,174,76,0.9)]'>
              <div>
                {item3 ? (
                  <>
                    <div className='relative w-[90px] h-[90px]'>
                      <Image
                        src={item3}
                        alt=""
                        width={90}
                        height={90}
                        layout="fill"
                        objectFit='contain'
                      />
                    </div>
                    <button onClick={() => setItem3("")} className = {`${mode == 'edit' ? "":"hidden"}`}>
                      <AiOutlineCloseCircle size={20} />
                    </button>
                  </>
                ) : (
                  <button onClick={() => setIsShowModalSelectItemIcon({ status: true, action: setItem3 })} className = {`${mode == 'edit' ? "":"hidden"}`}>
                    <BiImageAdd size={50} />
                  </button>
                )}

              </div>
            </div>
            <div className='absolute bottom-[7rem] right-5  rounded-full p-2 animate-bounce-slow drop-shadow-[0_5px_15px_rgba(224,174,76,0.9)]'>
              <div>
                {item4 ? (
                  <>
                    <div className='relative w-[90px] h-[90px]'>
                      <Image
                        src={item4}
                        alt=""
                        width={90}
                        height={90}
                        layout="fill"
                        objectFit='contain'
                      />
                    </div>
                    <button onClick={() => setItem4("")} className = {`${mode == 'edit' ? "":"hidden"}`}>
                      <AiOutlineCloseCircle size={20} />
                    </button>
                  </>
                ) : (
                  <button onClick={() => setIsShowModalSelectItemIcon({ status: true, action: setItem4 })} className = {`${mode == 'edit' ? "":"hidden"}`}>
                    <BiImageAdd size={50} />
                  </button>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Card