

const activo = true;

// let mensaje = '';

// nope:
// if ( !activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }
// nope
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo'; 
// nope
// const mensaje = ( activo ) ? 'Activo' : null; 
const mensaje = activo && 'Activo';


console.log(mensaje);


