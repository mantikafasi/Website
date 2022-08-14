import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from './listItems';
import MainPage from './pages/MainPage';
import { Routes, Route } from "react-router-dom";
import ReportsPage from './pages/ReportsPage';
import ReviewsPage from './pages/ReviewsPage';
import AppbarComponent from './components/AppbarComponent';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://manti.vendicated.dev/">
        GuhGamin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const mdTheme = createTheme({palette:{mode:"dark"}});

function DashboardContent() {

  (!localStorage.getItem('token')) ?? (window.location.href = '/login');

  const [showTrash, setShowTrash] = React.useState(false);
  
  var dialog:any
  const setDialog = (dialog:any) => {
    dialog = dialog
  }

  return (
    <ThemeProvider theme={mdTheme}>
      {(dialog) ?? dialog}

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppbarComponent setDialog = {setDialog}/>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route path="/dashboard" element={<MainPage />} />
              <Route path='*' element={<MainPage/>}/>
              <Route path='/reports' element = {<ReportsPage setShowTrash = {setShowTrash} />}  />
              <Route path='/reviews' element = {<ReviewsPage/>} />
            </Routes>

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
