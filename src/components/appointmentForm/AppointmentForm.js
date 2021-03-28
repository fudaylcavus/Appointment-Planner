import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

const labelTextStyle = {
  margin: "0 0 0.3em 0"
}

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  function handleTitleChange({target}) {
    setTitle(target.value)
  }

  function handleTimeChange({target}) {
    setTime(target.value)
  }

  function handleDateChange({target}) {
    setDate(target.value)
  }

  function handleContactChange({target}) {
    setContact(target.value)
  }

  return (
    <form onSubmit={handleSubmit}>

      <label for="title">
        <h4 style={labelTextStyle}>Title</h4>
        <input onChange={handleTitleChange} id="title" type="text" value={title} placeholder="Enter a Title" />
      </label>

      <label for="date">
        <h4  style={labelTextStyle}>Date</h4>
        <input onChange={handleDateChange} id="date" min={getTodayString()} type="date" value={date} placeholder="Enter a Date" />
      </label>      

      <label for="time">
        <h4 style={labelTextStyle}>Time</h4>
        <input onChange={handleTimeChange} id="time" type="time" value={time} placeholder="Enter an Time" />
      </label>

      <label for="contact">
        <h4 style={labelTextStyle}>Contact</h4>
        <ContactPicker contacts={contacts} handleContactChange={handleContactChange}/>
      </label>

      <input value="Save" type="submit"/>
    </form>
  );
};
