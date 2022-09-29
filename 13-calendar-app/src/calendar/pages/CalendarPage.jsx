import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer, getMessagesES } from '../../helpers';
import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '../';
import { useState } from 'react';
import { useUiStore } from '../../hooks';
import { useCalendarStore } from '../../hooks/useCalendarStore';

export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const { openDateModal, isDateModalOpen } = useUiStore();
  const { events, activeEvent, setActiveEvent } = useCalendarStore();

  const onDoubleClick = (event) => {
    /* console.log("DClick"); */
    openDateModal();
  }

  const onSelect = (event) => {
    setActiveEvent(event);
  }

  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
  }

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }

    return { style };
  }

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Calendar */}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        defaultView={lastView}
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      {/* Calendar modal */}

      <CalendarModal />

      <FabAddNew/>
      { !!activeEvent &&  <FabDelete/>}
    </>
  )
}
