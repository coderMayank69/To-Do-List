import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import ListItem from '@mui/material/ListItem'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };
const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
}
  return (
    <ListItem>
        <form onSubmit={handleSubmit}>
    <TextField 
    id="outlined-basic" 
    label="Add a new task" 
    variant="outlined" 
    fullWidth 
    margin="normal"
    value={text}
    onChange={handleChange}
    InputProps={{
        endAdornment: (
            <InputAdornment position="end">
                <IconButton edge="end" aria-label="add todo" type='submit' color="primary">
                    <AddIcon />
                </IconButton>
            </InputAdornment>
        )
    }} />
    </form>
    </ListItem>
  )
}

export default TodoForm
