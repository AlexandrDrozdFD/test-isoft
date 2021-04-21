
import { observable, action, makeObservable } from 'mobx';

class Store {
  isOpenModal = false
  name = ''
  surname = ''

  constructor() {
    makeObservable(this, {
      isOpenModal: observable,
      name: observable,
      surname: observable,
      handleChange: action,
      openModal: action,
      closeModal: action,
    })
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.target;
    if (target.name === 'name') {
      this.name = target.value;
    }
    if (target.name === 'surname') {
      this.surname = target.value;
    }
    
  }
  
  openModal = (): void => {
    if (this.name && this.surname) {
      this.isOpenModal = true
    }
  
  }
  closeModal = (): void => {
    this.isOpenModal = false
  }
}

const store = new Store();


export default store;


