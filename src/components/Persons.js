import React from "react";
import App from "../App";

// const Person =()=>{
//    return <p>This is person components. I'm {Math.floor(Math.random()*100)} year old.</p>;
// }

// sử dụng Props
const Person =(props)=>{
    return <p>This is person {props.name}. I'm {props.age} years old.</p>;
 }

export default Person;