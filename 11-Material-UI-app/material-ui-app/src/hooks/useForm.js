import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [ form, setForm ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    useEffect(() => {
        createValidators();
    }, [ form ])
    
    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [ formValidation ])


    const onFormChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setForm( initialForm );
    }

    const createValidators = () => {
        
        const formCheckedValues = {};
        
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( form[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );
    }



    return {
        ...form,
        form,
        onFormChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}
