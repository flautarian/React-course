import React from 'react';
import { Box } from '@mui/system';
import { Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Grid } from '@mui/material'
import { useSelector } from 'react-redux';
import { SiderbarItem } from './SiderbarItem';

export const Sidebar = ({ sidebarWidth }) => {

    const { displayName } = useSelector(state => state.auth);

    const { notes } = useSelector(state => state.journal);


    return (
        <Box
            component='nav'
            sx={{ width: { sm: sidebarWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                anchor="left"
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth }
                }}>

                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>{displayName}</Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        notes.map(note => (
                            <SiderbarItem key={note.id} {...note} />
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}
