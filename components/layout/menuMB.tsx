import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'
type Props = {}

const MenuMB = (props: Props) => {
  const router = useRouter()
  console.log(router.asPath);
  const [toggle, setToggle] = useState(false)
  return (
    <div className="border-bottom border px-2 main_container flex  items-center justify-between text-md  ">
      <div className="w-full flex items-center font-bold gap-5 text-xs sm:text-md">
        <Link href='/'>
          <Image src="/img/logo.png" alt="" width="50%" height="50%" />
        </Link>
        <Link href='/'>
          Reward Of Life
        </Link>
        <div className="bg-gray-700 text-white h-7 px-3 rounded-md font-bold flex items-center text-xs lg:text-md">
          Try to free
        </div>
      </div>
      <div className="relative">
        {toggle ? (
          <div className={`absolute border bg-white h-auto top-6 w-40 left-[-120px] rounded-md p-2 drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)]`}>
            <ul className="items-center font-bold text-gray-400 cursor-pointer">
              <li className={`mt-2 hover:text-black transition-all relative ${router.asPath == '/' && 'text-black'}`}>
                <Link href='/'>
                  <a>
                    Home
                    {/* {router.asPath == '/' && <span className='dot' />} */}
                  </a>
                </Link>
              </li>
              <li className={`mt-2 hover:text-black transition-all relative ${router.asPath == '/icon_rewards' && 'text-black'}`}>
                <Link href='/icon_rewards'>
                  <a>
                    Icon Rewards
                    {/* {router.asPath == '/icon_rewards' && <span className='dot' />} */}
                  </a>
                </Link>
              </li>
              <li className={`mt-2 hover:text-black transition-all relative ${router.asPath == '/about' && 'text-black'}`}>
                <Link href='/about'>
                  <a>
                    About
                    {/* {router.asPath == '/about' && <span className='dot' />} */}
                  </a>
                </Link>
              </li>
              <li className={`mt-2 hover:text-black transition-all relative ${router.asPath == '/contract' && 'text-black'}`}>
                <Link href='/contract'>
                  <a>
                    Contract
                    {/* {router.asPath == '/contract' && <span className='dot' />} */}
                  </a>
                </Link>
              </li>

            </ul>
          </div>
        ) : null}

      </div>
      <AiOutlineMenuFold size={40} onClick={() => setToggle(!toggle)} />
    </div>
  )
}

export default MenuMB