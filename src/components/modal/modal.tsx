import './styles.scss';

type ModalProps = {
  closeModal: () => void
  isOpenModal: boolean
  name: string
  surname: string
}

export const Modal = ({ closeModal, isOpenModal, name, surname }: ModalProps) => {
  return (
    <div className={isOpenModal ? 'modal' : 'modal d-none'}>
      <div className="modal__content">
        <p className='modal__content-output'>{`Здравствуйте: ${name.toUpperCase()} ${surname.toUpperCase()}`}</p>
      </div>
      <button className="modal__content-btn-close" onClick={closeModal}>Close</button> 
    </div>
  )
}