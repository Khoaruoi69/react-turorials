import React, { useState } from "react";
function Examples(){
    const [count,setCount] = useState(0);
    return(
        <div>
           <p>You click {count} times</p>
           <button onClick={()=>setCount(count+1)}>Click me</button> 
        </div>
    );
}

export default Examples;