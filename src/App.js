import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Person from './components/Persons/Persons'
import Examples from './components/Example';
function App() {
  const ChangeNameHandler = (e)=>{
    setPerson([{name:"Kgia 00", age:10},{name:"Kgia2222", age:50},{name:"Kgia2223", age:11}])
    console.log(e);
  }
  const [person,setPerson]= useState([{name:"Kgia1", age:10},{name:"Kgia2", age:50},{name:"Kgia3", age:11}])


// Two-way binding
const SwitchChangeHandler=(event)=>{
  console.log(event.target.value);
  setPerson([{name:event.target.value, age:10},{name:"Kgia2222", age:50},{name:"Kgia2223", age:11}])
}

// Render theo điều kiện ( ẩn hiện click)
const [showPerson, setShowPerson] = useState(true);
const togglePerson=()=>{
  setShowPerson(!showPerson);
}
  return (
    <div className="App">
      <h1>This is the first ReactJS app</h1>
      <button onClick={()=>togglePerson()}>Toggle Person</button>
      {
        showPerson===true?(<div>
        <Person click={ChangeNameHandler} changed={SwitchChangeHandler} name={person[0].name} age={person[0].age}/>
        <Person name={person[1].name} age={person[1].age}/>
        <Person name={person[2].name} age={person[2].age}/>
        </div>):null
        
      }
      <Examples></Examples>
    </div>

   // React.createElement('div',{className: 'App'},React.createElement('h1',null, 'This is the frist ReactJS app'))
  );
}

export default App;
