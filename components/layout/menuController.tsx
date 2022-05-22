import React from 'react'
import Menu from './menu'
import MenuMB from './menuMB'

type Props = {}

const MenuController = (props: Props) => {
  return (
    <div>
      <div className='hidden lg:inline'>
        <Menu />
      </div>
      <div className='lg:hidden'>
        <MenuMB />
      </div>
    </div>
  )
}

export default MenuController