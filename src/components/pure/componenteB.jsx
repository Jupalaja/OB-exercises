import React, {useState} from 'react'
import PropTypes from 'prop-types'

function ComponenteB(connectionState) {
const [isConnected, setconnection] = useState(connectionState);
const changeConnection = () => {
    setconnection(!isConnected)
}
  return (
    <div>
       <h3>{isConnected === false ? 'Contacto no disponible' : 'Contacto En linea'}</h3>
       <button onClick={changeConnection}> Cambiar estado</button>
    </div>
  )
}

ComponenteB.propTypes = {
    connectionState: PropTypes.bool,
}

export default ComponenteB