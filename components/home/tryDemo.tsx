import Link from 'next/link'
import React from 'react'
import BannerImage from '../box/image/bannerImage'
import Image from 'next/image'
type Props = {}

const TryDemo = (props: Props) => {
  return (

    <div className="lg:flex mt-10 !py-10 items-center main_container ">


      <div className="w-full lg:w-1/2">
        <div className=" text-3xl lg:text-3xl font-bold text-gray-100 uppercase ">
          <span className="text-blue-500" >Demo</span>
        </div>
        <div className="text-sm w-3/4 my-3 lg:my-6 text-gray-300">
          You can construct your card using the sceneries once you have the item's icon.
        </div>

        <div className="flex gap-3">
          <Link href="/playground">
            <div className="w-40 hover:bg-blue-500 hover:text-white text-blue-500 font-bold h-10 flex items-center justify-center rounded-md border-2 border-blue-500 transition-all cursor-pointer" >Get Start</div>
          </Link>
        </div>

        {/* <div className="flex gap-4">
        <CardHome />
        <CardHome />
        <CardHome />
      </div> */}
      </div>
      <div className="items-center w-full lg:w-1/2 mt-10 lg:mt-0 ">
        <div className='border rounded-full overflow-hidden border-blue-500 border-4-solid'>
          <Image src={'/img/banner/cupboeadMixCloseUp.png'} alt='' width={"100%"} height={"100%"}
            objectFit='contain'
            layout='responsive'
          />
        </div>
      </div>

    </div>
  )
}

export default TryDemo