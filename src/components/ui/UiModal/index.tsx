import { FC, ReactNode } from 'react';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

enum size {
  'sm',
  'md',
  'lg',
  'xl'
}
type TSize = keyof typeof size
interface IUiModal {
  isOpen: boolean
  size: TSize
  children: ReactNode
  title: string
  toggle(): void
}
const UiModal: FC<IUiModal> = (props) => {

  const toggle = (): void => {
    return props.toggle()
  }
  return <Modal
    centered
    isOpen={props.isOpen}
    size={props.size}
  >
    <ModalHeader toggle={toggle}>
      {props.title}
    </ModalHeader>
    <ModalBody>
      {props.children}
    </ModalBody>
  </Modal>;
};

export default UiModal;
