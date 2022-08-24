import logo from './logo.svg';
import './App.css';
import Greetings from './components/pure/greetings';
import GreetingsF from './components/pure/greetingsF';
import ComponenteA from './components/pure/componenteA';

function App() {
  const miContacto = {
    firstName: "Juan",
    lastName: "Lasso",
    email: "miemail.com",
    isConnected: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*       Componete de Clase:     */}
        {/*<Greetings name = "Juan"></Greetings>*/}

        {/*       Componete Funcional:    */}
        {/* <GreetingsF name = "Juan"></GreetingsF> */}

        {/*       Componete Lista de Tareas:    */}
        {/* <TaskListComponent></TaskListComponent> */}

        {/*       Componete Contactos:      */}
        <ComponenteA contact={miContacto}/>
      </header>
    </div>
  );
}

export default App;
