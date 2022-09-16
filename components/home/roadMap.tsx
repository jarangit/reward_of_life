import React from 'react'
import { AiFillCheckCircle, AiTwotoneCheckCircle } from 'react-icons/ai'
import { dataRoadMap } from '../../data/mockData/roadMap'
type Props = {}

const RoadMap = (props: Props) => {
  return (
    <div className="bg-[#151515] py-10 px-6">
      <div className='py-10 '>
        <div className='text-3xl font-bold text-center text-blue-500 uppercase'>Road Map</div>
        <ul className='w-full lg:w-2/4 mx-auto my-3'>
          {dataRoadMap.map((items: any, key: number) => (
            <li className='my-3' key={key}>
              <div className='text-lg font-bold text-red-500'>
                {items.date}
              </div>
              {items.contents.map((list: any, key: number) => (
                <div className='ml-10 flex items-start gap-2' key={key}>
                  <div className="mt-1">
                    {list.status ? (
                      <AiFillCheckCircle />
                    ) : (
                      <AiTwotoneCheckCircle />
                    )}
                  </div>
                  <div>
                    {list.text}
                  </div>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RoadMap