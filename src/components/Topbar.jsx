// Topbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { Search, AccountCircle } from '@mui/icons-material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SettingsIcon from '@mui/icons-material/Settings';
import WindowIcon from '@mui/icons-material/Window';
import FilterListIcon from '@mui/icons-material/FilterList';
import ShareIcon from '@mui/icons-material/Share';


const Topbar = () => {


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <>
             <AppBar
                position="fixed"
                sx={{
                    // zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    width: isMobile ? '85%' : '85%',
                    marginLeft: isMobile ? 0 : 'auto',
                    boxShadow: 'unset',
                    borderBottom: '2px solid #dfe3ea',
                    mt:{xs:'9px',md:'0'}
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{ flexGrow: 1, fontSize: isMobile ? '10px' : '13px', color: 'gray', display: 'flex', alignItems: 'center' }}
                    >
                        <IconButton sx={{ mr: 1 }}>
                            <Search />
                        </IconButton>
                        Search anything here...
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton>
                            <SaveAltIcon />
                        </IconButton>
                        <IconButton>
                            <RocketLaunchIcon />
                        </IconButton>
                        <IconButton>
                            <SettingsIcon />
                        </IconButton>
                        <IconButton>
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
             {/* Bottom Action Bar */}
             <AppBar
                position="fixed"
                sx={{
                    top: 'auto',
                    mt: isMobile ? '3.5rem' : '4.1rem',
                    // zIndex: theme.zIndex.drawer + 1,
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    width: isMobile ? '100%' : '85%',
                    marginLeft: isMobile ? 0 : 'auto',
                    boxShadow: 'unset',
                    borderBottom: '2px solid #dfe3ea',
                }}
            >
                <Toolbar 
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        padding: isMobile ? '8px' : '16px' 
                    }}
                >
                    <Typography 
                        variant="h6" 
                        color="gray" 
                        fontWeight={700} 
                        ml={1.5} 
                        sx={{ fontSize: isMobile ? '20px' : '20px' }}
                    >
                        Overview
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            // flexDirection: isMobile ? '' : 'row',
                            gap: isMobile ? 1 : 2,
                            alignItems: 'center',
                        }}
                    >
                        <Button variant="outlined" sx={{ fontSize: isMobile ? '10px' : '12px', padding: isMobile ? '4px' : '8px' }}>
                            <WindowIcon fontSize={isMobile ? 'small' : 'default'} />
                            <Typography 
                                sx={{ textTransform: 'capitalize', color: 'gray', fontSize: isMobile ? '10px' : '12px' }}
                            >
                                Customize widget
                            </Typography>
                        </Button>
                        <Button variant="outlined" sx={{ fontSize: isMobile ? '10px' : '12px', padding: isMobile ? '4px' : '8px' }}>
                            <FilterListIcon fontSize={isMobile ? 'small' : 'default'} />
                            <Typography 
                                sx={{ textTransform: 'capitalize', color: 'gray', fontSize: isMobile ? '10px' : '12px' }}
                            >
                                Filter
                            </Typography>
                        </Button>
                        <Button variant="outlined" sx={{ fontSize: isMobile ? '10px' : '12px', padding: isMobile ? '4px' : '8px' }}>
                            <ShareIcon fontSize={isMobile ? 'small' : 'default'} />
                            <Typography 
                                sx={{ textTransform: 'capitalize', color: 'gray', fontSize: isMobile ? '10px' : '12px' }}
                            >
                                Share
                            </Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Topbar;
