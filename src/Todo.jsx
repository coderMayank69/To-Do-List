import React from 'react'
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import Box from '@mui/material/Box';

const Todo = ({ todo, removeTodo, toggleTodo }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: '12px 0',
        mb: 1,
        borderRadius: 0,
        bgcolor: 'transparent',
        transition: 'all 0.15s ease',
        borderBottom: '1px solid #f0f0f0',
        '&:hover': {
          '& .delete-btn': {
            opacity: 1,
          }
        },
      }}
    >
      {/* Circular Checkbox */}
      <Box
        onClick={toggleTodo}
        sx={{
          width: 24,
          height: 24,
          minWidth: 24,
          minHeight: 24,
          borderRadius: '50%',
          border: todo.completed ? 'none' : '2px solid #e0e0e0',
          bgcolor: todo.completed ? '#da3633' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          mr: 2,
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: '#da3633',
            bgcolor: todo.completed ? '#da3633' : 'transparent',
          }
        }}
      >
        {todo.completed && (
          <span style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
        )}
      </Box>
      
      {/* Task Text */}
      <Box sx={{ flex: 1 }}>
        <ListItemText 
          primary={todo.title}
          sx={{
            m: 0,
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? '#999' : '#2c3e50',
            '& .MuiListItemText-primary': {
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.5,
            }
          }}
        />
      </Box>
      
      {/* Delete Button */}
      <IconButton 
        edge="end" 
        aria-label="delete" 
        onClick={removeTodo}
        className="delete-btn"
        size="small"
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
