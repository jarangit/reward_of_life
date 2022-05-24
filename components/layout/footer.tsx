import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-gray-100 py-3'>
      <ul className="flex justify-center gap-4">
        <li>
          <BsInstagram />
        </li>
        <li>
          <AiFillTwitterSquare />
        </li>
        <li><FaDiscord /></li>
      </ul>
    </div>
  )
}

export default Footer