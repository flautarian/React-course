import { useState, useMemo, useEffect } from 'react';
import { addHours, differenceInSeconds } from 'date-fns';
import es from 'date-fns/locale/es';
import DatePicker, { registerLocale } from "react-datepicker";
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import "react-datepicker/dist/react-datepicker.css";
import { useUiStore } from '../../hooks';
import { useCalendarStore } from '../../hooks/useCalendarStore';


registerLocale('es', es);

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const initialEvent = {
    title: '',
    notes: '',
    start: new Date(),
    end: addHours(new Date(), 1),
    bgColor: '#fafafa',
    user: {
      _id: '1234',
      name: 'Fernando'
    }
};

export const CalendarModal = () => {

    const { isDateModalOpen, closeDateModal } = useUiStore();
    const { activeEvent, startSavingEvent } = useCalendarStore();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formValues, setFormValues] = useState(initialEvent);

    const { title, notes, start, end } = formValues;

    const onCloseModal = () => {
        /* console.log("closing modal"); */
        closeDateModal();
    }

    const onDateChange = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event
        });
    }

    const onSubmit = async(event) => {
        event.preventDefault();
        setFormSubmitted(true);
        const diferenceDates = differenceInSeconds(formValues.start, formValues.end);
        if (isNaN(diferenceDates) || differenceInSeconds <= 0) {
            Swal.fire('Fechas incorrectas', "revise las fechas del evento", 'error');
            return;
        }

        if (formValues.title.length <= 0) return;
        await startSavingEvent(formValues);
        setFormSubmitted(false);
        closeDateModal();
    }


    const titleValidation = useMemo(() => {
        if (!formSubmitted) return '';
        return (formValues.title.length > 0)
            ? 'is-valid'
            : 'is-invalid';
    }
        , [formValues.title, formSubmitted]);
    
        useEffect(() => {
            setFormValues(!!activeEvent ? {...activeEvent} : initialEvent);
        }, [activeEvent])
        

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    return (
        <Modal
            isOpen={isDateModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={onSubmit}>

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker
                        selected={start}
                        onChange={(event) => onDateChange(event, 'start')}
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption="Hora" />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker
                        minDate={formValues.startDate}
                        selected={end}
                        onChange={(event) => onDateChange(event, 'end')}
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption="Hora" />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${titleValidation}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={formValues.notes}
                        onChange={onInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
