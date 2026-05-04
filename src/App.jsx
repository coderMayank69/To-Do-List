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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ fontWeight: '700', color: '#da3633', margin: 0 }}
            >
              Todoist
            </Typography>
          </Box>
          <TodoList />
        </Container>
      </Box>
    </>
  )
}

export default App
