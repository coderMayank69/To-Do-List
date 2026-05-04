import * as React from 'react';
import {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Todo from './Todo';
import TodoForm from './TodoForm';


const getInitialData = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
const TodoList = () => {
    const [todos, setTodos] = React.useState(getInitialData);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        }        ))
    }

    const addTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
        }
        setTodos([...todos, newTodo]);
    }

    return (
    <Box>
      {todos.map((todo) => (
      <Todo key={todo.id} todo={todo} removeTodo={()=> removeTodo(todo.id)} toggleTodo={()=> toggleTodo(todo.id)}/>
      ))}
        <TodoForm  addTodo={addTodo}/>
      </Box>
  )

}

export default TodoList



// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {
//         const labelId = `checkbox-list-label-${value}`;

//         return (
         
//     </List>
//   );
// }
