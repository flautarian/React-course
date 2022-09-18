import React from 'react';
import { Grid, Typography, Button, TextField } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1}}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light'>12 January, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1}}/>
                Save
            </Button>
        </Grid>
        <Grid container>
        <TextField 
            type="text"
            variant="filled"
            fullWidth
            placeholder='Type your title'
            label='Title'
            name='title'
            sx={{ border: 'none', mb: 1}}/>
        </Grid>

        <TextField 
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder='What happened today?'
            label='Description'
            name='description'
            sx={{ border: 'none', mb: 1}}
            minRows='5'/>

        {/* Image gallery */}

        <ImageGallery/>
    </Grid>
  )
}
