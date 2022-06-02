import React from 'react'
import SideMenuCategory from '../../components/layout/sideMenuCategory'
import ListAllIcon from '../../components/list/listAllIcon'

type Props = {}

const IconRewardPage = (props: Props) => {
  return (
    <div className="grid  my-10 grid-cols-4 min-h-screen gap-5">
      <div className="p-6 bg-gray-100 rounded-3xl  hidden md:inline">
        <div className="text-gray-500 text-xl text-center my-3 font-bold">
          ICON REWARD
        </div>
        <SideMenuCategory/>
      </div>
      <div className='col-span-3 md:col-span-3'>
        <ListAllIcon/>
      </div>
    </div>
  )
}

export default IconRewardPage