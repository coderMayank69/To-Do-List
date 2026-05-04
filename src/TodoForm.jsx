import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
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
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  }

  return (
    <Box sx={{ mt: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField 
          fullWidth
          placeholder="Add a task..."
          variant="outlined"
          size="small"
          value={text}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ mr: 1 }}>
                <IconButton 
                  size="small"
                  type='submit'
                  aria-label="add task"
                  sx={{
                    color: '#da3633',
                    '&:hover': { bgcolor: 'rgba(218, 54, 51, 0.08)' }
                  }}
                >
                  <AddIcon sx={{ fontSize: 22 }} />
                </IconButton>
              </InputAdornment>
            )
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              fontSize: '15px',
              transition: 'all 0.2s ease',
              '&:hover fieldset': {
                borderColor: '#e0e0e0',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#da3633',
              }
            },
            '& .MuiOutlinedInput-input::placeholder': {
              color: '#999',
              opacity: 1,
            }
          }}
        />
      </form>
    </Box>
  )
}

export default TodoForm
