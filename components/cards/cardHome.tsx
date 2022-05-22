import Image from 'next/image'
import React from 'react'

type Props = {}

const CardHome = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 my-10 w-36 px-3 py-5 rounded-lg bg-red-100">
      <div>
      <Image src="/img/smile.png" alt='' width={40} height={40} />
      </div>
      <div className="text-gray-500 font-bold">Then combine</div>
      <div className="text-gray-500 text-sm" >Then combine the height and width properties with a</div>
    </div>
  )
}

export default CardHome