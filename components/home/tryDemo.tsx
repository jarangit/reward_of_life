import Link from 'next/link'
import React from 'react'
import BannerImage from '../box/image/bannerImage'

type Props = {}

const TryDemo = (props: Props) => {
  return (
    <div className="lg:flex mt-10  items-center">


      <div className="w-full lg:w-1/2">
        <div className=" text-3xl lg:text-3xl font-bold text-gray-100 uppercase ">
          <span className="text-blue-500" >Demo</span>
        </div>
        <div className="text-sm w-3/4 my-3 lg:my-6 text-gray-300">
          After you have the icon of the thing you can create your card with the scenes
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
        <BannerImage image='/img/demo.png' />
      </div>

    </div>
  )
}

export default TryDemo