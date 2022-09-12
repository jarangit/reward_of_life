import React from 'react'
import { BiImageAdd } from 'react-icons/bi'
import Image from 'next/image'
type Props = {
  id: string;
  iconColor: string;
  onSetImageItem: any;
  currentImage: string;
}

const InputAddItems = ({ id, iconColor, onSetImageItem, currentImage }: Props) => {

  const onChange = (e: any) => {
    if (e) {
      const file = e.target.files[0];
      const image = URL.createObjectURL(file)
      if (image) {
        onSetImageItem(image)
      }
    }
  }
  return (
    <label id={id} className={`${iconColor}`}>
      {currentImage ? (
        <Image
          src={currentImage}
          alt=""
          width={90}
          height={90}
        />
      ) : (
        <BiImageAdd size={50} />
      )}
      <input type="file" className='hidden' onChange={onChange} />
    </label>
  )
}

export default InputAddItems