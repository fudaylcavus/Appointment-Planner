import React from "react";

export const ContactPicker = ({
  contacts,
  handleContactChange
}) => {
  return (
    
    <select onChange={handleContactChange}>
      <option value="no-contact">No Contact is selected</option>
      {contacts.map( contact => {
        return <option value={contact.name}>{contact.name}</option>
      })}
    </select>
  );
};
