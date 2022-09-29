import { useUiStore } from "../../hooks"
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { addHours } from 'date-fns';

const tEvent = {
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

export const FabAddNew = () => {

    const { openDateModal } = useUiStore();

    const onClickButton = () => {
        openDateModal(tEvent);
    }


    return (
        <button className="btn btn-primary fab" onClick={onClickButton}>
            <i className="fas fa-plus"></i>
        </button>
    )
}
