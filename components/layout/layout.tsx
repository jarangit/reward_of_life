import React from 'react'
import { Footer, Menu } from '.';
import MenuController from './menuController';
import MenuMB from './menuMB';

type Props = {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <MenuController />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout