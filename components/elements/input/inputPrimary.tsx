import React, { useMemo } from 'react'

type Props = {
  id?: string;
  type: string;
  placeholder: string;
  onChange?: any;
}

const InputPrimary = ({
  id,
  type,
  placeholder,
  onChange
}: Props) => {
  const styled = useMemo(() => ({
    main: `
      bg-back
      border
      p-2
      rounded-md
      border-blue
      mt-1
    `
  }), [])
  const onSetName = (e:any) => {
    onChange(e.target.value)
  }
  return (
    <input className={`${styled.main}`} type={type} id={id} placeholder={placeholder} onChange={onSetName} />
  )
}

export default InputPrimary