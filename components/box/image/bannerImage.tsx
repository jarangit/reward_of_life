import Image from 'next/image'
import React from 'react'

type Props = {}

const BannerImage = (props: Props) => {
  return (
    <div className=" relative md:w-[450px] my-auto mx-auto w-full">
      {/* <div className="relative md:w-[400px] md:h-[400px] overflow-hidden rounded-full mx-auto text-center drop-shadow-[20px_40px_80px_rgba(0,166,247,0.25)]">
        <div className='relative'>
        <Image
          src={"/img/avatar.jpg"}
          alt=""
           width={"200%"}
          height={'200%'}
          layout='responsive'
          // objectFit='contain'
        />
        </div>
      </div>
        <div className='z-20 absolute top-0 left-24 drop-shadow-[0_10px_20px_rgba(195,146,250,0.9)] opacity-50 md:opacity-100'>
          <Image src={"/img/thunder.png"} alt="" width={70} height={100}/>
        </div>
        <div className='z-20 absolute top-20 left-[-20px] md:left-[-50px] drop-shadow-[0_10px_20px_rgba(195,146,250,0.9)] opacity-50 md:opacity-100'>
          <Image src={"/img/reward.png"} alt="" width={120} height={150}/>
        </div>
        <div className='z-20 absolute bottom-2 left-10 drop-shadow-[0_10px_20px_rgba(195,146,250,0.9)] opacity-50 md:opacity-100'>
          <Image src={"/img/power.png"} alt="" width={60} height={100}/>
        </div>
        <div className='z-20 absolute top-0 right-24'>
          <Image src={"/img/book.png"} alt="" width={40} height={40}/>
        </div>
        <div className='z-20 absolute top-20 right-[-10px] md:[-50px] drop-shadow-[0_10px_20px_rgba(195,146,250,0.9)] opacity-50 md:opacity-100'>
          <Image src={"/img/smile.png"} alt="" width={100} height={150}/>
        </div>
        <div className='z-20 absolute bottom-20 right-10 drop-shadow-[0_10px_20px_rgba(195,146,250,0.9)] opacity-50 md:opacity-100'>
          <Image src={"/img/box.png"} alt="" width={40} height={40}/>
        </div> */}
        <Image src={'/img/banner.png'} alt='' width={"100%"} height={"100%"}
         objectFit='contain'
         layout='responsive'
        />
    </div>
  )
}

export default BannerImage