import './styles.scss'

type ButtonProps = {
  openModal: () => void
}

export const Button = ({ openModal }: ButtonProps) => {

  return (
      <button 
          className="btn-ready"
          onClick={openModal}
      >
        Готово
      </button>
  )
}


