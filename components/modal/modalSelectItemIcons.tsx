import React from 'react'
import { createPortal } from 'react-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Modal from './modal';
import Image from 'next/image'
type Props = {
  isShow: any;
  hide: any;
  onSelect: any;
}

const dataImage = [
  {
    name: "Guitar",
    image: "/img/items/guitar.png",
  },
  {
    name: "Bicycle",
    image: "/img/items/bicycle.png",
  },
  {
    name: "Game",
    image: "/img/items/game.png",
  },
  {
    name: "Sneaker",
    image: "/img/items/sneaker.png",
  },
]

const ModalSelectItemIcons = ({ isShow, hide, onSelect }: Props) => {

  function selectImage(e: any) {
    if (e) {
      console.log('%cMyProject%cline:35%ce', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', e)
      onSelect(e)
      hide({ status: false })
    }
  }
  return (
    <>
      <Modal isShow={isShow} hide={hide}>
        <div>
          <div className="flex justify-between items-center">
            <div className='text-xl'>Select items</div>
            <button onClick={() => hide({ status: false })} >
              <AiOutlineCloseCircle size={30} />
            </button>
          </div>
          <div className='flex gap-3 mt-6'>
            {dataImage.map((item: any, key: number) => (
              <div key={key}>
                <div className='border rounded-md hover:border-blue transition-all cursor-pointer' onClick={() => selectImage(item.image)}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text-center">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  )
}


export default ModalSelectItemIcons