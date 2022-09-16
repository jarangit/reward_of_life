import Link from 'next/link'
import React from 'react'
import BannerImage from '../box/image/bannerImage'
import Image from 'next/image'
type Props = {}

const DownloadSection = (props: Props) => {
  return (
    <div className="lg:flex mt-10  items-center main_container !py-10">
      <div className="w-full lg:w-1/2">
        <div className=" text-3xl lg:text-3xl font-bold text-gray-100 uppercase ">
          <span className="text-blue-500" >Download</span>
        </div>
        <div className="text-sm w-3/4 my-3 lg:my-6 text-gray-300">
          The Blender file is available for download; use it wherever you want.
        </div>
      </div>
      <div className="items-center w-full lg:w-1/2 mt-10 lg:mt-0 ">
        <BannerImage image='/img/banner/blender.png' />
      </div>


    </div>
  )
}

export default DownloadSection