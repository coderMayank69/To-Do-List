import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TodoList from './TodoList'

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#ffffff', py: 4 }}>
        <Container maxWidth="sm">
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom
            sx={{ fontWeight: '600', color: '#2c3e50', mb: 4 }}
          >
            Inbox
          </Typography>
          <TodoList />
        </Container>
      </Box>
    </>
  )
}

export default App
