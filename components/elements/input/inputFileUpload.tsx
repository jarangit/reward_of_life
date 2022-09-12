import React, { useMemo, useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai';
import Image from 'next/image'
type Props = {
  id: string;
  title: string;
  text: string;
  onChangeUserAvatar?: any;
}

const InputFileUpload = ({ id, title, text, onChangeUserAvatar }: Props) => {
  const [currentImage, setCurrentImage] = useState("")
  const styled = useMemo(() => ({
    main: `
    text-center 
    border 
    flex 
    justify-center 
    flex-col 
    items-center 
    p-2 
    rounded-md  
    mt-1 
    border-blue
    `
  }), [])

  const onChange = (e: any) => {
    if (e) {
      const file = e.target.files[0]
      if (file) {
        onChangeUserAvatar(URL.createObjectURL(file))
        setCurrentImage(URL.createObjectURL(file))
      }
    }
  }
  return (
    <div>
      <label htmlFor={id}>
        <div>
          {title}
        </div>
        <div className={`${styled.main}`}>
          {currentImage ? (
            <Image
              src={currentImage}
              alt=""
              width={100}
              height={100}
            />
          ) : (
            <AiOutlineCloudUpload size={50} />
          )}
          <div className='text-sm'>
            {text}
          </div>
        </div>
        <input id={id}
          type="file"
          className='hidden'
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default InputFileUpload