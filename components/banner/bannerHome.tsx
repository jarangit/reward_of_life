import Link from 'next/link'
import React from 'react'
import BannerImage from '../box/image/bannerImage'
import CardHome from '../cards/cardHome'

type Props = {}

const BannerHome = (props: Props) => {
  return (
    <div className="lg:flex mt-10  items-center main_container !py-10">
      <div className="w-full lg:w-1/2">
        <div className=" text-3xl lg:text-4xl font-bold text-gray-100 uppercase ">
          <span className="text-blue-500" >Your things</span> Project
        </div>
        <div className="text-sm w-3/4 my-3 lg:my-6 text-gray-300">
        Utilize one of the many icons we have to express yourself. We are very stocked. & others too, hence this project produces images of many objects. and may only have one owner.
        </div>
        <div className="flex gap-3">
          <Link href="/playground">
            <div className="w-40 hover:bg-blue-500 hover:text-white text-blue-500 font-bold h-10 flex items-center justify-center rounded-md border-2 border-blue-500 transition-all cursor-pointer" >Get Start</div>
          </Link>
          {/* <div className="w-40 hover:bg-blue-500 hover:text-white text-blue-500 font-bold h-10 flex items-center justify-center rounded-md border-2 border-blue-500 transition-all cursor-pointer" >Request Demo</div> */}
        </div>

        {/* <div className="flex gap-4">
          <CardHome />
          <CardHome />
          <CardHome />
        </div> */}
      </div>
      <div className="items-center w-full lg:w-1/2 mt-10 lg:mt-0 ">
        <BannerImage image='/img/banner/cupboeadMix4x4Tran.png' />
      </div>


    </div>
  )
}

export default BannerHome