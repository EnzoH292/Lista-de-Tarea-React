import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import Formulario from './Components/Formulario';


function App() {
  return (
    <Container className='my-4'>
      <h1 className='display-4 text-center'>Lista de Tareas</h1>
      <hr/>
      <Formulario></Formulario>
    </Container>
  );
}

export default App;
