import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Menu = (props: Props) => {
  const router = useRouter()

  return (
    <div className="px-2 main_container flex  items-center justify-between text-md">
      <div className="lg:max-w-[40%] max-w-[20%] w-full flex items-center font-bold ">
        <Link href='/'>
          <Image src="/img/logo.png" alt="" width="50%" height="50%" />
        </Link>
        <Link href='/'>
          Reward Of Life
        </Link>
      </div>
      <div className="flex justify-between w-full items-center ">
        <div>
          <ul className="flex gap-6 items-center h-20 font-bold text-gray-400 cursor-pointer">
            <li className={`hover:text-black transition-all relative ${router.asPath == '/' && 'text-black'}`}>
              <Link href='/'>
                <a>
                  Home
                  {router.asPath == '/' && <span className='dot' />}
                </a>
              </Link>
            </li>
            <li className={`hover:text-black transition-all relative ${router.asPath == '/icon_rewards' && 'text-black'}`}>
              <Link href='/icon_rewards'>
                <a>
                  Icon Rewards
                  {router.asPath == '/icon_rewards' && <span className='dot' />}
                </a>
              </Link>
            </li>
            <li className={`hover:text-black transition-all relative ${router.asPath == '/about' && 'text-black'}`}>
              <Link href='/about'>
                <a>
                  About
                  {router.asPath == '/about' && <span className='dot' />}
                </a>
              </Link>
            </li>
            <li className={`hover:text-black transition-all relative ${router.asPath == '/contract' && 'text-black'}`}>
              <Link href='/contract'>
                <a>
                  Contract
                  {router.asPath == '/contract' && <span className='dot' />}
                </a>
              </Link>
            </li>

          </ul>
        </div>
        <div className="bg-gray-700 text-white h-10 px-3 rounded-md font-bold flex items-center text-sm lg:text-md">
          Try to free
        </div>
      </div>
    </div>
  )
}

export default Menu