import React from 'react'
import { AiFillCheckCircle, AiTwotoneCheckCircle } from 'react-icons/ai'
import { dataRoadMap } from '../../data/mockData/roadMap'
type Props = {}

const RoadMap = (props: Props) => {
  return (
    <div className='py-10'>
      <div className='text-3xl font-bold text-center text-blue-500 uppercase'>Road Map</div>
      <ul className='w-full lg:w-2/4 mx-auto my-3'>
        {dataRoadMap.map((items: any, key: number) => (
          <li className='my-3'>
            <div className='text-lg font-bold text-red-500'>
              {items.date}
            </div>
            {items.contents.map((list: any) => (
              <div className='ml-10 flex items-start gap-2'>
                <div className = "mt-1">
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
  )
}

export default RoadMap