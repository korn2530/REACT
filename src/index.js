import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Greetins, UserCard } from "./Greeting";
import { User } from "./User";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Post } from "./Posts";
import BoxComponent from "./BoxComponent";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

function Counter() {
  const [mensaje, setMensaje] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(function(){

     console.log('render');
  }, [counter])

  return (
    <div>
      <input onChange={e=> setMensaje(e.target.value)} />

      <button onClick={() => alert("El mensaje es :"+mensaje)}>Save</button>
       
       <hr/>

           <h1> Counter : {counter} </h1>
       <button onClick={()=> setCounter(counter+1)}>

             Incrementar

       </button>

    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
