import ItemTarea from "./ItemTarea";
import ListaTareas from "./ListaTareas";
import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formTareas">
          <Form.Control type="text" placeholder="Agregar Tarea" />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </div>
  );
};

export default Formulario;
