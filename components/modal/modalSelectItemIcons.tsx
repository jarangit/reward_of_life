import React from 'react'
import { createPortal } from 'react-dom';

type Props = {
  isShow: any;
  hide: any;
}

const ModalSelectItemIcons = ({ isShow, hide }: Props) => {
  console.log('%cMyProject%cline:9%cisShow', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(252, 157, 154);padding:3px;border-radius:2px', isShow)
  return (
    <>
      {isShow ? "hi" : ""}
    </>
  )
}


export default ModalSelectItemIcons