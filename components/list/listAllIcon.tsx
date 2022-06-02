import Image from 'next/image'
import React from 'react'
import { mockAllIcons } from '../../service/mock/allIocn'

type Props = {}

const ListAllIcon = (props: Props) => {
  return (
    <div>
      <div className="md:hidden text-center mb-5 text-3xl font-bold">
        Icon reward
      </div>
      <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-12 gap-3">
        {mockAllIcons &&
          mockAllIcons.slice(0, 100).map((item: any) => (
            <div key= {item.id} className=" cursor-pointer bg-red-100 overflow-hidden rounded-full border-4 flex justify-center items-center border-yellow-400 drop-shadow-md">
              <Image
                src={item.avatar}
                alt={item.avatar}
                width={100}
                height={100}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ListAllIcon