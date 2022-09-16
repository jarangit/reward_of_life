import React from 'react'
import Image from 'next/image'
type Props = {}

const TypeItemSection = (props: Props) => {
  return (
    <div className="bg-[#151515] py-10">
      <div className="flex flex-col gap-10 mt-10  items-center main_container !py-10">
        <div className='text-4xl uppercase font-bold'>
          Type
        </div>
        <div className='flex flex-col lg:flex-row gap-12'>
          <div className='border p-6 rounded-xl border-blue'>
            <Image
              src={"/img/banner/gameBoy.png"}
              alt=""
              width="300px"
              height="300px"
            />
            <div className='text-center text-xl uppercase font-bold'>Normal</div>
          </div>
          <div className='border p-6 rounded-xl border-blue'>
            <Image
              src={"/img/banner/S_bycicel.png"}
              alt=""
              width="300px"
              height="300px"
            />
            <div className='text-center text-xl uppercase font-bold'>Special</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypeItemSection