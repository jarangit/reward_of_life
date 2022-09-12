import React, { useMemo } from 'react'

type Props = {
  text: string;
  w?: string;
  h?: string;
  p?: string;
  m?: string;
  bg?: string;
  onClick?: () => void;
}

const ButtonPrimary = ({
  text,
  w,
  h,
  p,
  m,
  bg
}: Props) => {
  const styled = useMemo(() => ({
    main:`
      ${w ? w:"w-full"}
      ${h ? h:"h-full"}
      ${bg ? bg:"bg-blue"}
      rounded-md
      py-1
    `
  }), [])
  return (
    <button className={`${styled.main}`} >{text} </button>
  )
}

export default ButtonPrimary