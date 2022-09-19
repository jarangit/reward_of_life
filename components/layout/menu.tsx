import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'

type Props = {}

const Menu = (props: Props) => {
  const router = useRouter()

  return (
    <div className="px-2 main_container flex  items-center justify-between text-md">
      <div className="lg:max-w-[40%] max-w-[20%] w-full flex items-center font-bold gap-2 ">
        <Link href='/'>
          <Image src="/img/logo/logo_star.png" alt="" width="50%" height="50%" />
        </Link>
        <Link href='/'>
          YOUR THINGS
        </Link>
      </div>
      <div className="flex justify-between w-full items-center ">
        <div>
          <ul className="flex gap-6 items-center h-20 font-bold text-gray-400 cursor-pointer">
            <li className={`hover:text-blue-500 transition-all relative ${router.asPath == '/' && 'text-blue-500'}`}>
              <Link href='/'>
                <a>
                  Home
                  {router.asPath == '/' && <span className='dot' />}
                </a>
              </Link>
            </li>
            <li className={`hover:text-blue-500  transition-all relative ${router.asPath == '/icon_rewards' && 'text-blue-500'}`}>
              <Link href='https://opensea.io/collection/yourthings'>
                <a>
                  Things
                  {router.asPath == '/icon_rewards' && <span className='dot' />}
                </a>
              </Link>
            </li>
            <li className={`hover:text-blue-500 transition-all relative ${router.asPath == '/about' && 'text-blue-500'}`}>
              <Link href='/playground'>
                <a>
                  Playground
                  {router.asPath == '/playground' && <span className='dot' />}
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex justify-center gap-4">
          {/* <li>
            <BsInstagram />
          </li> */}
          <li>
            <Link href={"https://twitter.com/rewardoflife1"}>
              <AiFillTwitterSquare size={30} />
            </Link>
          </li>
          {/* <li><FaDiscord /></li> */}
        </ul>
        {/* <div className="bg-blue-500 text-white h-10 px-3 rounded-md font-bold flex items-center text-sm lg:text-md cursor-pointer">
          Try to free
        </div> */}
      </div>
    </div>
  )
}

export default Menu