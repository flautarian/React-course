import React from 'react';
import { Box } from '@mui/system';
import { Toolbar } from '@mui/material';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
        {/* Navbar */}
        <Navbar sidebarWidth={drawerWidth}></Navbar>
        {/* Sidebar */}
        <Sidebar sidebarWidth={drawerWidth}/>

        <Box component='main' sx={{ flexGrow: 1, p: 3}}>
             {/* Toolbar */}
             <Toolbar/>
             {/* Children */}
             { children }
        </Box>
    </Box>
  )
}
