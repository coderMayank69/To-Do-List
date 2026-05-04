import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import Box from '@mui/material/Box';

const Todo = ({ todo, removeTodo, toggleTodo }) => {
    const labelId = `checkbox-list-label-${todo.id}`;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: '12px 16px',
        mb: 0.5,
        borderRadius: 1,
        bgcolor: 'transparent',
        transition: 'all 0.15s ease',
        border: '1px solid transparent',
        '&:hover': {
          bgcolor: '#f9f9f9',
          '& .delete-btn': {
            opacity: 1,
          }
        },
        opacity: todo.completed ? 0.6 : 1,
      }}
    >
      <Checkbox
        edge="start"
        checked={todo.completed}
        tabIndex={-1}
        disableRipple
        inputProps={{ 'aria-labelledby': labelId }}
        onClick={toggleTodo}
        sx={{
          mr: 1.5,
          '&.Mui-checked': {
            color: '#da3633',
          }
        }}
      />
      <Box sx={{ flex: 1 }}>
        <ListItemText 
          id={labelId} 
          primary={todo.title}
          sx={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? '#999' : '#2c3e50',
            '& .MuiListItemText-primary': {
              fontSize: '15px',
              fontWeight: 400,
            }
          }}
        />
      </Box>
      <IconButton 
        edge="end" 
        aria-label="delete" 
        onClick={removeTodo}
        className="delete-btn"
        sx={{
          opacity: 0,
          transition: 'opacity 0.2s ease',
          color: '#da3633',
          ml: 1,
          '&:hover': {
            bgcolor: 'rgba(218, 54, 51, 0.08)',
          }
        }}
      >
        <DeleteIcon sx={{ fontSize: 20 }} />
      </IconButton>
    </Box>
  )
}

export default Todo
