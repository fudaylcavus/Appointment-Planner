import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  const [ contacts, setContacts ] = useState([])
  const [ appointments, setAppointments ] = useState([])

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  function addContact(contact) {
    setContacts( prevContacts => {
      return [ contact, ...prevContacts]
    })
  }

  function addAppointment(appointment) {
    setAppointments( prevAppointments => {
      return [ appointment, ...prevAppointments ]
    })
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage 
              addContact={addContact} 
              contacts={contacts}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
              contacts={contacts}
              addAppointment={addAppointment} 
              appointments={appointments}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
