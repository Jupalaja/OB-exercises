import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'
import ComponenteB from './componenteB'

function ComponenteA({contact}){
  return (    
    <div>
        <h2> Nombre: { contact.firstName }</h2>
        <h3>Apellido: { contact.lastName }</h3>
        <h4>Email: { contact.email }</h4>
        <ComponenteB connectionState={false}/>
    </div>
  );
}

ComponenteA.propTypes = {
    contact: PropTypes.instanceOf(Contact),
}
    
export default ComponenteA