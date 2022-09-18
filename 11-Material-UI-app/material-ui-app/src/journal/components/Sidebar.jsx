import React from 'react';
import { Box } from '@mui/system';
import { Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Grid } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'


export const Sidebar = ({ sidebarWidth }) => {
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
                    <Typography variant='h6' noWrap component='div'>Facundo Giacconi</Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ['January', 'February', 'March', 'April', 'And so on...'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'test secondary text'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>

        </Box>
    )
}
