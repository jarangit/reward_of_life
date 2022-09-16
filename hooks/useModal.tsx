import React, { Dispatch, SetStateAction, useState } from 'react'

type Props = {}

const useModal = (props: Props) => {
  const [isShowModalSelectItemIcon, setIsShowModalSelectItemIcon] = useState<{ status: boolean, action: Dispatch<SetStateAction<string>> }>({
    status: false,
    action: () => "",
  })
  const [isShowModalShowScene, setIsShowModalShowScene] = useState<{ status: boolean, action: Dispatch<SetStateAction<string>> }>({
    status: false,
    action: () => "",
  })

  return {
    isShowModalSelectItemIcon,
    setIsShowModalSelectItemIcon,
    isShowModalShowScene,
    setIsShowModalShowScene
  }
}

export default useModal