import React from 'react';
import ItemTarea from './ItemTarea';
import ListGroup from 'react-bootstrap/ListGroup';



const ListaTareas = ({arregloTarea, borrarTarea}) => {

    return (
        <ListGroup>
            {
                arregloTarea.map( (cadaTarea, index) => <ItemTarea key={index} nombreTarea={cadaTarea} borrarTarea={borrarTarea}></ItemTarea> )
            }
      
        </ListGroup>
    );
};

export default ListaTareas;