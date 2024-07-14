import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction"
import "./Calendar.css"
import { useRef, useState } from 'react';
import TaskDialog from '../Dialog/TaskDialog';

export default function BigCalendar({tasks}) {
  const [clickedEvent, setClickedEvent] = useState()
  const [toggleTaskDialog, setToggleTaskDialog] = useState(false)
    const eventList = tasks.map((task) => {
      if(task.status == 0 && new Date(task.deadline) < new Date()) {
        return {
          title: task.name,
          start: task.deadline,
          task: task,
          color: "#d33d44"
        }
      }
      if(task.status == 0 && new Date(task.deadline) > new Date()) {
        return {
          title: task.name,
          start: task.deadline,
          task: task,
          color: "#6b7280"
        }
      }
      return {
          title: task.name,
          start: task.deadline,
          task: task,
          color: "#0D9276"
        }
      }
    )
    const calendarRef =  useRef(null)
    const handleEventClick = (info) => {
      setClickedEvent(info.event._def.extendedProps.task)
      setToggleTaskDialog(true)
    }


    const handleDateClick = (info) => {
      var date = new Date(info.dateStr)
      var events = calendarRef.current.getApi().getEvents()
      console.log(events)
      var result = []
      for(let index in events) {
          var start = events[index]._instance.range.start.getDate()
          var end = events[index]._instance.range.end.getDate()
          if(start <= date.getDate() && date.getDate() <= end) {
              console.log(start <= date.getDate() && date.getDate() <= end)
              result.push(events[index])
          }
      }
    }

  return (
    <div className='w-9/12 rounded-lg'>
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin,interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title", 
          end: "dayGridMonth,timeGridWeek,timeGridDay", 
        }}
        events={eventList}
        dateClick={handleDateClick}
        height={'85vh'}
        ref={calendarRef}
        eventClick={(event) => handleEventClick(event)}
      />

      <TaskDialog 
            onClose = {() => setToggleTaskDialog(false)}
            open = {toggleTaskDialog}
            task = {clickedEvent}
      />
    </div>
  )
}
