import React from 'react';
import AppBar from '@mui/material/AppBar';
import {Toolbar, Typography, IconButton} from '@mui/material';
import { MenuOutlined, LogoutOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';

export const Navbar = ({ sidebarWidth = 0 }) => {
    return (
        <AppBar position="fixed" color="primary"
            sx={{
                width: { sm: `calc(100% - ${sidebarWidth}px)` },
                ml: { sm: `calc(${sidebarWidth}px)` }
            }}
        >
            <Toolbar>
                <IconButton aria-label="nav-sidebar-button" color='inherit' edge='start' sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant="h6" noWrap component='div'>Journal App</Typography>

                    <IconButton aria-label="nav-logout-button" color='error'>
                        <LogoutOutlined />
                    </IconButton>

                </Grid>
            </Toolbar>
        </AppBar>
    )
}
