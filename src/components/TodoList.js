import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos';
import EditTodoFrom from './EditTodoForm';
import { FaRegCalendarPlus } from "react-icons/fa6";

const TodoList = () => {
    const [todoValue, setTodoValue] = useState(localStorage.getItem("todos")? 
    JSON.parse(localStorage.getItem("todos")) : []);

    useEffect (() =>{
        localStorage.setItem("todos", JSON.stringify(todoValue));
    }, [todoValue])  

    const addTodo = todo => {
        setTodoValue([...todoValue, {id: Date.now(), task:todo,
            isEditing:false, completed:false}])
    }

    const toggle = id => {
        setTodoValue(todoValue.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed}: todo))
    }

    const deleteTodo = id => {
        setTodoValue(todoValue.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodoValue (todoValue.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing}: todo))
    }

    const editTask = (task , id) => {
        setTodoValue(todoValue.map(todo => todo.id === id ? {
            ...todo, task, isEditing: !todo.isEditing} : todo))
    }


  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex
    flex-col p-7 min-h-[550px] rounded-xl'>
        <div className='flex items-center mt-7 gap-3'>
            <FaRegCalendarPlus className='text-3xl'/>
            <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>
        <TodoForm addTodo ={addTodo}/>{
            todoValue.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoFrom editTodo={editTask} task={todo}/>
                ) : (
                <Todos task={todo} key={index} deleteTodo={deleteTodo}
                editTodo={editTodo} toggle={toggle}/>
                )
            ))
        }
    </div>
  )
}

export default TodoList
