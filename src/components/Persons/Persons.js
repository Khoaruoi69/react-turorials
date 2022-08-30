import React from "react";
import "./Persons.css"

// const Person =()=>{
//    return <p>This is person components. I'm {Math.floor(Math.random()*100)} year old.</p>;
// }

// sử dụng Props
const Person =(props)=>{
    return(
        <div className="Persons">
            <p onClick={props.click}>This is person {props.name}. I'm {props.age} years old.</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    ) 
    

 }

export default Person;