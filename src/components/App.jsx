import React,{useState} from "react"

function App (){
    const world = () => {
        window.alert("გამარჯობა მსოფლიო")
    }
     return(
        <button onClick={world}>click</button>
     )
}
export{App}
