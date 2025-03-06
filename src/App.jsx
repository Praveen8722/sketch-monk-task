// App.jsx
import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <>
      <CssBaseline />
      {/* Topbar with 85% width */}
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Topbar />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {/* Sidebar with 15% width */}
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <Dashboard />
        </Box>
      </Box>
    </>
  );
};

export default App;
