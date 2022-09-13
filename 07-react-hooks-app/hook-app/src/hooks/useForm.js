import React, { useState } from 'react'

export const useForm = (initialForm = {}) => {

    const [form, setForm] = useState(initialForm);

    const onFormChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const formReset = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...initialForm
        })
    }

    return {
        form,
        onFormChange,
        formReset
    }
}
