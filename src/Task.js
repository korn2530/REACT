 
import './task.css'
 
 export function TaskCard({ready}){

   return <div className='card'>

    <h1>Task Card</h1>  
    <span
     style= {ready? {color: 'green'} : {color: 'red'}}
    >{ready ? 'tarea realiza':'tarea no realizada'}</span>

   </div>;


}