import { useUiStore } from "../../hooks"
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { addHours } from 'date-fns';

export const FabDelete = () => {

  const { startDeleteEvent } = useCalendarStore();

  const onClickButton = () => {
    startDeleteEvent();
  }


  return (
    <button className="btn btn-danger fab-delete" onClick={onClickButton}>
      <i className="fas fa-trash-alt"></i>
    </button>
  )
}
