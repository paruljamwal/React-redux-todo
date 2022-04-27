import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { TODO } from "../Redux/action";
import { store } from "../Redux/store";
export const Todos=()=>{

    //use useState 
    const todos=useSelector((store=>store.todos));

    const dispatch=useDispatch()
    //its local state and only dependent on itself so use useState 
    
     const [text,setText]=useState("")

     const handleAdd=()=>{
        dispatch(TODO({
            title:text,
            status:false,
        }))
     }
    return(
        <div>
            <h1>REACT-REDUX TODO APP</h1>
            <input type="text" placeholder="✍ Enter Your Todo Here" onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleAdd} >Add Todo</button>
             {todos.map((e)=>(
                 <div key={e.title}>{e.title}</div>
             ))}
        </div>
    )
}