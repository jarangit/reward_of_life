import React from 'react'
import BannerImage from '../box/image/bannerImage'

type Props = {}

const WhatIsThisProject = (props: Props) => {
  return (
    <div className="bg-[#151515] py-10">

      <div className="lg:flex mt-10  gap-10 items-center justify-between main_container">
        <div className="items-center w-full lg:w-1/2 mt-10 lg:mt-0 ">
          <BannerImage image='/img/items/guitar.png' />
        </div>

        <div className="w-full lg:w-1/2">
          <div className=" text-3xl lg:text-3xl font-bold text-gray-100 uppercase ">
            What is <span className="text-blue-500" >Your Things</span> Project.
          </div>
          <div className="text-sm w-3/4 my-3 lg:my-6 text-gray-300">
          This initiative was designed to help you save your belongings, interests, and successes while showcasing who you are.
          </div>
          {/* <div className="flex gap-3">
          <div className="w-40 hover:bg-blue-500 hover:text-white text-blue-500 font-bold h-10 flex items-center justify-center rounded-md border-2 border-blue-500 transition-all cursor-pointer" >Get Start</div>
          <div className="w-40 hover:bg-blue-500 hover:text-white text-blue-500 font-bold h-10 flex items-center justify-center rounded-md border-2 border-blue-500 transition-all cursor-pointer" >Request Demo</div>
        </div> */}

          {/* <div className="flex gap-4">
        <CardHome />
        <CardHome />
        <CardHome />
      </div> */}
        </div>
      </div>
    </div>
  )
}

export default WhatIsThisProject