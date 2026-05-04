import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import TodayIcon from '@mui/icons-material/Today';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Typography from '@mui/material/Typography';
import TodoList from './TodoList'

const drawerWidth = 280;

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              bgcolor: '#f5f5f5',
              borderRight: '1px solid #e0e0e0',
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#da3633', mb: 3 }}>
              Todoist
            </Typography>
            <List>
              <ListItem button selected sx={{ borderRadius: 1, bgcolor: '#ffe6e3', mb: 1 }}>
                <ListItemIcon sx={{ color: '#da3633', minWidth: 40 }}>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button sx={{ borderRadius: 1, mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary="Today" />
              </ListItem>
              <ListItem button sx={{ borderRadius: 1, mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="Upcoming" />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, overflow: 'auto', bgcolor: '#ffffff' }}>
          <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom
              sx={{ fontWeight: '600', color: '#2c3e50', mb: 3 }}
            >
              Inbox
            </Typography>
            <TodoList />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App
