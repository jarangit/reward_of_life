import React, { useState } from 'react'

type Props = {}

const useModal = (props: Props) => {
  const [isShowModalSelectItemIcon, setIsShowModalSelectItemIcon] = useState(false)

  return {
    isShowModalSelectItemIcon,
    setIsShowModalSelectItemIcon
  }
}

export default useModal