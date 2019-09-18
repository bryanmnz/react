import React, { Component } from 'react';
const AddTripButton = (props) => {
    return <div><span>Desea Eliminar el registro {props.id}?</span><button class="btn-flat toast-action" onClick={props.service(props.id)}>Si</button></div>
}