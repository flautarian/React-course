import React, { useRef } from 'react';
import { Grid, Typography, Button, TextField, IconButton } from '@mui/material';
import { SaveOutlined, UploadOutlined, DeleteOutline } from '@mui/icons-material';
import { ImageGallery } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { saveActiveNote, startDeletingNote, startUploadingFiles } from '../../store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

    const dispatch = useDispatch();

    const { isSaving, activeNote, messageSaved } = useSelector(state => state.journal);

    const [note, setNote] = useState({
        id: activeNote?.id,
        title: activeNote?.title,
        body: activeNote?.body,
        date: activeNote?.date,
        imageUrls: activeNote?.imageUrls,
    });


    const fileInputRef = useRef();

    const { id, title, body, date, imageUrls } = note;

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }
        , [note]);

    useEffect(() => {
        if (messageSaved.length > 0)
            Swal.fire('Note updated', messageSaved, 'success');
    }, [messageSaved])


    useEffect(() => {
        setNote({
            title: activeNote?.id != note.id? activeNote?.title : note.title,
            body: activeNote?.id != note.id? activeNote?.body : note.body,
            date: activeNote?.date,
            imageUrls: activeNote?.imageUrls,
            id: activeNote?.id,
        });
    }, [activeNote]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setNote({
            ...note,
            [name]: value
        });
    }

    const saveNote = () => {
        dispatch(saveActiveNote(note));
    }

    const onFileInputChange = ({ target }) => {
        console.log(target.files);
        if (target.files.length === 0) return;
        dispatch(startUploadingFiles(target.files));
    }

    const onDelete = () => {
        dispatch(startDeletingNote());
    }

    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid item>

                <input
                    type='file'
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    style={{ display: 'none' }} />

                <IconButton
                    color='primary'
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}>
                    <UploadOutlined />
                </IconButton>

                <Button
                    color="primary"
                    sx={{ padding: 2 }}
                    onClick={saveNote}
                    disabled={isSaving}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant={title?.length > 0 ? "filled" : ""}
                    fullWidth
                    placeholder='Type your title'
                    label='Title'
                    name='title'
                    value={title}
                    onChange={onInputChange}
                    sx={{ border: 'none', mb: 1 }} />
            </Grid>

            <TextField
                type="text"
                variant={body?.length > 0 ? "filled" : ""}
                fullWidth
                multiline
                placeholder='What happened today?'
                label='Description'
                name='body'
                value={body}
                onChange={onInputChange}
                sx={{ border: 'none', mb: 1 }}
                minRows='5' />

            {/* Delete button */}

            <Grid container justifyContent='end'>
                <Button
                    onClick={onDelete}
                    sx={{ mt: 2 }}
                    color="error">
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid>

            {/* Image gallery */}

            <ImageGallery images={activeNote?.imageUrls} />
        </Grid>
    )
}
