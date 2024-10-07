// Ejercicio 1: Consumo de una API y Procesamiento de Datos
async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await respuesta.json();

        usuarios.forEach(usuario => {
            console.log(`Nombre: ${usuario.name}, Email: ${usuario.email}`);
        });
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
}

obtenerUsuarios();

// Ejemolo practico del pdf
// async function obtenerUsuarios() {
//     try {
//         const respuesta = await
//             fetch('https://jsonplaceholder.typicode.com/users');
//         if (!respuesta.ok) {
//             throw new Error('Error en la respuesta de la red');
//         }
//         const usuarios = await respuesta.json();
//         console.log('Usuarios obtenidos', usuarios)
//     } catch (error) {
//         console.error('Hubo un problema con la peticion Fetch:', error)
//     }
// }

// obtenerUsuarios();