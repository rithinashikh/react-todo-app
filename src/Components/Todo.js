import React from 'react';
import './Todo.css';
import { useState } from 'react';

function Todo() {

const formHandle = (e) => {
 e.preventDefault()   
}

const [todo,setTodo] = useState('');
const [todos,setTodos] = useState([]);

const addTodos = () => {
    const duplicate = todos.find((item)=> item.list === todo)
    if (duplicate !== undefined) {
        window.confirm("Item already in todo list");
        return;
    }
    else {
        setTodos([...todos,{list:todo, id:Date.now() ,status:false}]) 
        setTodo('')
        return; 
    }    

}

const todoComplete = (id) => {
    let complete = todos.map((list)=> {
            if(list.id===id){
                return ({...list,status:!list.status})
            }
            return list
        }
    )
    setTodos(complete)
}

const todoDelete = (id) => {
    setTodos(todos.filter( (t)=> t.id !== id ))
}



  return (
    <div className="container">
        <h1>Todo App</h1>
        <form className="form-group" onSubmit={formHandle}>
            <input type="text" value={todo} className="form-control" placeholder="Enter Todo" onChange={(e)=>{setTodo(e.target.value)}}/>
            <button onClick={addTodos}><i class="fa-solid fa-plus"></i></button>
        </form>
        <div className="list">
            <ul>
                {todos.map((to)=> 
                (
                <li className="list-items">
                    <div className="list-item-list" id={to.status?'list-item':''}>{to.list}</div>
                    <span>
                        <i className="fa-solid fa-check-double list-item-icons" id="complete" onClick={()=>todoComplete(to.id)}></i>
                        <i className="fa-solid fa-xmark list-item-icons" id="delete" onClick={()=>todoDelete(to.id)}></i>
                    </span>

                </li>
                )
                )
                }
            </ul>
        </div>
    </div>
  )
}

export default Todo