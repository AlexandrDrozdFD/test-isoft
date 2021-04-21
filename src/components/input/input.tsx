import './styles.scss'

type InputProps = {
  name: string;
  surname: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ name, surname, handleChange }: InputProps) => {
  return (
    <div className="inputs-container">
      <input  
          id="name"
          type="text" 
          name="name"
          value={name} 
          onChange={handleChange} 
          placeholder="Enter your Name" 
          className="inputs-container__input"
      />
      <input  
          type="text"
          name="surname"
          value={surname} 
          onChange={handleChange} 
          placeholder="Enter your Surname" 
          className="inputs-container__input"
      />
    </div>
  )
}