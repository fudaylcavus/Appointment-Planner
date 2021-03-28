import React, { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm'
import { TileList } from "../../components/tileList/TileList";


export const AppointmentsPage = ({
  appointments,
  contacts,
  addAppointment

}) => {
  const [ title, setTitle ] = useState('')
  const [ contact, setContact ] = useState({})
  const [ date, setDate ] = useState(null)
  const [ time, setTime ] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault();
    let appointment = {
      title,
      contact,
      date,
      time
    }
    addAppointment(appointment)
    setTitle('')
    setContact({})
    setDate(null)
    setTime(null)

   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
          tiles={appointments}
        />
      </section>
    </div>
  );
};
