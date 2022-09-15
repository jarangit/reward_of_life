import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
type Props = {
  children: any;
  isShow: boolean;
  hide:any;
}

const Modal = ({ children, isShow , hide}: Props) => {

  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className='bg-gray border p-6 rounded-xl min-w-[500px]'>
            {children}
          </div>
        </div>
      </div>
      <div className="opacity-90 fixed inset-0 z-40 bg-gray blur-lg"></div>
    </motion.div>
  )
}

export default Modal