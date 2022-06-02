import React from 'react'
import {mockListCategory} from '../../service/mock/listCategory'
console.log('%cMyProject%cline:2%cmockListCategory', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(34, 8, 7);padding:3px;border-radius:2px', mockListCategory)
type Props = {}

const SideMenuCategory = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        {mockListCategory &&
          mockListCategory.map((item:any) => (
            <div key = {item.id} className="font-bold cursor-pointer text-red-900">{item.first_name}</div>
          ))
        }
      </div>
    </div>
  )
}

export default SideMenuCategory