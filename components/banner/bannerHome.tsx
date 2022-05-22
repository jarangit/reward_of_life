import React from 'react'
import BannerImage from '../box/image/bannerImage'
import CardHome from '../cards/cardHome'

type Props = {}

const BannerHome = (props: Props) => {
  return (
    <div className="lg:flex mt-10  items-center  ">
      <div className="w-full lg:w-1/2">
        <div className=" text-3xl lg:text-6xl font-bold text-gray-500 ">
          Icon <span className="text-blue-500" >Rewards</span> Project.
        </div>
        <div className="text-sm w-3/4 my-3 lg:my-6 text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, nam fuga dolorem, excepturi pariatur fugiat ab repellat ut a corrupti voluptatum quibusdam optio exercitationem explicabo quis illo? Hic, facere perspiciatis.
        </div>

        <div className="flex gap-3">
          <div className="w-40 hover:bg-blue-500 hover:text-white text-blue-500 font-bold h-10 flex items-center justify-center rounded-md border-2 border-blue-500 transition-all cursor-pointer" >Get Start</div>
          <div className="w-40 hover:bg-blue-500 hover:text-white text-blue-500 font-bold h-10 flex items-center justify-center rounded-md border-2 border-blue-500 transition-all cursor-pointer" >Request Demo</div>
        </div>

        {/* <div className="flex gap-4">
          <CardHome />
          <CardHome />
          <CardHome />
        </div> */}
      </div>
      <div className="items-center w-full lg:w-1/2 mt-10 lg:mt-0 ">
        <BannerImage />
      </div>


    </div>
  )
}

export default BannerHome