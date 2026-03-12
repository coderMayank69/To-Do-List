import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({ todo, removeTodo, toggleTodo }) => {
    const labelId = `checkbox-list-label-${todo.id}`;
  return (
            <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={removeTodo} color="error">
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
            sx={{
              bgcolor: todo.completed ? 'action.hover' : 'transparent',
              borderRadius: 1,
              mb: 1,
              transition: 'all 0.2s ease',
              '&:hover': { bgcolor: 'action.selected' }
            }}
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                    onClick={toggleTodo}
                 
                />
              </ListItemIcon>
              <ListItemText 
                id={labelId} 
                primary={todo.title}
                sx={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? 'text.secondary' : 'text.primary'
                }}
              />
            </ListItemButton>
          </ListItem>
       ) }



export default Todo
