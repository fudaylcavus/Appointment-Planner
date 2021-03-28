import React, { useEffect, useState } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm'
import { TileList } from "../../components/tileList/TileList";


export const ContactsPage = (props) => {
  const [ name, setName ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ duplicate, setDuplicate ] = useState(false)

  let { addContact, contacts } = props


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      let contact = {
        name,
        phone,
        email
      }
      addContact(contact)
      setName('')
      setPhone('')
      setEmail('')
    } else {
      alert(`You've already saved that contact`)
    }
  };

  useEffect(() => {
    setDuplicate(false)
    contacts.forEach( savedContact => {
      if (savedContact.name === name) {
        setDuplicate(true)
      }
    })
  }, [name, contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}/>
      </section>
    </div>
  );
};
