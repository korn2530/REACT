

import {  VscGlobe } from "react-icons/vsc"

const handleOnclick= async Async =>{

    

     await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response =>response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

};


export const Post = ()=>{

    return <button onClick={handleOnclick}>
          <VscGlobe/>
           Traer datos
    </button>;

}

