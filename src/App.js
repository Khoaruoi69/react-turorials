import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Person   from './components/Persons';
import Examples from './components/Example';
function App() {
  const ChangeNameHandler = (name)=>{
    console.log(name);
  }
  const [person,setPerson]= useState([{name:"Kgia1", age:10},{name:"Kgia2", age:50},{name:"Kgia3", age:11}])
  return (
    <div className="App">
      <h1>This is the frist ReactJS app</h1>
      <button onClick={(e)=>ChangeNameHandler(e)}>Change name</button>
      <Person name={person[0].name} age={person[0].age}/>
      <Person name={person[1].name} age={person[1].age}/>
      <Person name={person[2].name} age={person[2].age}/>
      <Examples></Examples>
    </div>

   // React.createElement('div',{className: 'App'},React.createElement('h1',null, 'This is the frist ReactJS app'))
  );
}

export default App;
