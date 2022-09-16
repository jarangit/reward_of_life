import Image from 'next/image'
import React from 'react'

type Props = {
  image: string;
}

const BannerImage = ({image}: Props) => {
  return (
    <div className=" relative md:w-[450px] my-auto mx-auto w-full rounded-2xl  overflow-hidden">
        <Image src={image} alt='' width={"100%"} height={"100%"}
         objectFit='cover'
         layout='responsive'
        />
    </div>
  )
}

export default BannerImage