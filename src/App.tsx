import { Input } from './components/input/input';
import { Title } from './components/title/title';
import { Modal } from './components/modal/modal';
import { Button } from './components/button/button';
import { observer } from 'mobx-react';
import './App.scss';

const App = observer((props: any) => {
 
  return (
    <div className="our-app">
      <Title />
      <Input 
          handleChange={props.store.handleChange}
          name={props.store.name}
          surname={props.store.surname}
      />
      <Modal 
          isOpenModal={props.store.isOpenModal} 
          closeModal={props.store.closeModal}
          name={props.store.name}
          surname={props.store.surname}
      />
      <Button openModal={props.store.openModal}/>
    </div>
  );
  
})

export default App;