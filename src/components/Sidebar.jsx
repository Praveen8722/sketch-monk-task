import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Box, IconButton } from '@mui/material';
import { Dashboard, BarChart, Campaign, Message, HelpOutline, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const theme = createTheme();

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); // State to track the selected menu item
  const [isDrawerOpen, setDrawerOpen] = useState(false); // State for controlling mobile drawer

  const menuItems = [
    { text: 'Overview', icon: <Dashboard /> },
    { text: 'Performance', icon: <BarChart /> },
    { text: 'Campaigns', icon: <Campaign /> },
    { text: 'Orders', icon: <BarChart /> },
    { text: 'Products', icon: <Campaign /> },
    { text: 'Messages', icon: <Message /> },
    { text: ' Sales Platform', icon: <HelpOutline /> },
  ];

  const handleListItemClick = (index) => {
    setSelectedIndex(index); // Update the selected item when clicked
  };

  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen size is mobile

  return (
    <ThemeProvider theme={theme} >
      <Box  sx={{ display: 'flex', }}>
        {isMobile && (
          <IconButton
          
            sx={{ position: 'absolute', top: 16, left: 16  }}
            onClick={() => setDrawerOpen(!isDrawerOpen)}
          >
            <MenuIcon  />
          </IconButton>
        )}
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={!isMobile || isDrawerOpen}
          onClose={() => setDrawerOpen(false)} // Close drawer on mobile
          sx={{
            width: isMobile ? '75%' : '15%',
            '& .MuiDrawer-paper': {
              width: isMobile ? '75%' : '15%',
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 16px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                style={{ width: '30px', height: '28px', borderRadius: '5px' }}
                src="/src/assets/img.jpg"
                alt=""
              />
              <Typography variant="h6" color="#267e70" fontWeight={700} ml={2}>
                Consist
              </Typography>
              
            </Box>
            <MenuIcon sx={{display: { xs: 'none', sm: 'block' },}}/>
            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon />
              </IconButton>
            )}
          </Toolbar>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: '600',
              color: 'gray',
              ml: '20px',
              mt: '10px',
            }}
          >
            MAIN MENU
          </Typography>
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {menuItems.map((item, index) => (
                <ListItem
                  button
                  key={item.text}
                  sx={{
                    backgroundColor: selectedIndex === index ? '#267e70' : 'transparent',
                    width: '90%',
                    height: '37px',
                    borderRadius: '10px',
                    '&:hover': {
                      backgroundColor: '#267e70',
                    },
                    marginLeft: '10px',
                    marginBottom: '10px',
                  }}
                  onClick={() => handleListItemClick(index)}
                >
                  <ListItemIcon sx={{ color: selectedIndex === index ? '#fff' : 'inherit' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      color: selectedIndex === index ? '#fff' : 'inherit',
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};

export default Sidebar;
