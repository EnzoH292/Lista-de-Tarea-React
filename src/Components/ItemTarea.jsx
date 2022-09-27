
import { ListGroup, Button } from 'react-bootstrap';


const ItemTarea = (props) => {
    return (
        <div>
            <ListGroup.Item className='d-flex justify-content-between'>
                {props.nombreTarea}
                <Button variant="warning" onClick={()=> props.borrarTarea(props.nombreTarea)}>Borrar</Button> 
            </ListGroup.Item>
        </div>
    );
};

export default ItemTarea;