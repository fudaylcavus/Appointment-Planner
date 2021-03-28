import React from "react";

const labelTextStyle = {
  margin: "0 0 0.3em 0"
}

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  function handleNameChange({target}) {
    setName(target.value)
  }

  function handleEmailChange({target}) {
    setEmail(target.value)
  }

  function handlePhoneChange({target}) {
    setPhone(target.value)
  }


  return (
    <form onSubmit={handleSubmit}>
      <label for="name">
        <h4 style={labelTextStyle}>Name</h4>
        <input onChange={handleNameChange} id="name" type="text" value={name} placeholder="Enter a name" />
      </label>

      <label for="phone">
        <h4  style={labelTextStyle}>Phone</h4>
        <input onChange={handlePhoneChange} id="phone" type="tel" value={phone} placeholder="Enter a phone" />
      </label>      

      <label for="email">
        <h4 style={labelTextStyle}>E-Mail</h4>
        <input onChange={handleEmailChange} id="email" type="email" value={email} placeholder="Enter an email" />
      </label>
      <input value="Save" type="submit"/>
    </form>
  );
};
