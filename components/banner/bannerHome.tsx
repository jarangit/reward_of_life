import Link from 'next/link'
import React, { useMemo } from 'react'
import BannerImage from '../box/image/bannerImage'
import CardHome from '../cards/cardHome'

type Props = {}

const BannerHome = (props: Props) => {
  const styled = useMemo(() => ({
    main: `
    !py-10
    main_container 
    
    items-center 

    lg:flex mt-10  
    `,
    box: `
    w-full 
    lg:w-1/2
    `,
    textHeader: `
    text-3xl 
    font-bold 
    text-gray-100 
    uppercase
    lg:text-4xl 
    `,
    textTitle: `
    text-sm 
    w-3/4 
    my-3 
    text-gray-300
    lg:my-6 
    `,
    butGetStart: `
    w-40 
    font-bold 
    h-10 
    flex 
    items-center 
    justify-center 
    rounded-md border-2 
    transition-all 
    cursor-pointer    
    `,
    boxImage: `
    items-center 
    w-full 
    lg:w-1/2 mt-10 
    lg:mt-0 
    `,
  }), [])
  return (
    <div className={`${styled.main}`}>
      <div className={`${styled.box}`}>
        <div className={`${styled.textHeader}`}>
          <span className="text-blue-500" >Your things</span> Project
        </div>
        <div className={`${styled.textTitle}`}>
          Utilize one of the many icons we have to express yourself. We are very stocked. & others too, hence this project produces images of many objects. and may only have one owner.
        </div>
        <div className="flex gap-3">
          <Link href="/playground">
            <div className={`${styled.butGetStart}`} >Get Start</div>
          </Link>
        </div>
      </div>
      <div className={`${styled.boxImage}`}>
        <BannerImage image='/img/banner/cupboeadMix4x4Tran.png' />
      </div>


    </div>
  )
}

export default BannerHome