import React from 'react'
import { Fragment } from 'react';

function getPerson() {
    let name = prompt("cual es tu nombre?") || "leonidas";
    let surname = prompt("cual es tu apellido?") || "deuteronomus";
    let job = prompt("cual es tu oficio?") || "espartano";
    return {
        name: name,
        surname: surname,
        job: job
    };
}

let person = getPerson();

export const FirstApp = () => {
    return (
        <Fragment>
            <p>Nombre:</p>
            <p>-Mi nombre es {person.name}</p>
            <p>-Mi apellido es {person.surname}</p>
            <p>-Y mi trabajo es {person.job}</p>
        </Fragment>
    )
}
