import React from 'react'
import Modal from './modal';

type Props = {
  isShow: any;
  hide: any;
  onSelect: any;
  children:any;
}

const ModalShowScene = ({ isShow, hide, onSelect, children }: Props) => {
  return (
    <Modal isShow={isShow} hide={hide}>
      {children}
    </Modal>
  )
}

export default ModalShowScene