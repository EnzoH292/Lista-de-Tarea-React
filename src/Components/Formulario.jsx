import ItemTarea from "./ItemTarea";
import ListaTareas from "./ListaTareas";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const Formulario = () => {
  //Mayoria de la lógica

  const [tarea, setTarea] = useState("");
  const [arrayTarea, setArrayTarea] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //arryTarea.push no se puede usar porque modifica directamente el state
    setArrayTarea([...arrayTarea, tarea]);
    //limpiar el input
    setTarea('');

  };

  const borrarTarea = (nombre) => {
    //borrar tarea
    let arregloModificado = arrayTarea.filter((item)=>(item !== nombre)); 
    //actualiar state
    setArrayTarea (arregloModificado);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formTareas">
          <Form.Control
            type="text"
            placeholder="Agregar Tarea"
            onChange={(e) => setTarea(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas arregloTarea={arrayTarea} borrarTarea={borrarTarea}></ListaTareas>
    </div>
  );
};

export default Formulario;
