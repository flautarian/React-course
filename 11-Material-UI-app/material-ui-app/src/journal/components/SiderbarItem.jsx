import React, { useMemo } from 'react';
import { Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Grid } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveNote } from '../../store/journal';

export const SiderbarItem = ({ title, body, id, date, imageUrls }) => {

    const dispatch = useDispatch();

    const { activeNote } = useSelector(state => state.journal);

    const activateNote = () => {
        const note = {
            id,
            title,
            body,
            date,
            imageUrls
        };
        dispatch(updateActiveNote(note));
    }

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + "..."
            : title;
    }, [title]);

    return (
        <ListItem disablePadding selected={activeNote?.id === id}>
            <ListItemButton onClick={activateNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={title} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
