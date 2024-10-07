// Ejercicio 1: Consumo de una API y Procesamiento de Datos
// Función asíncrona para obtener y procesar los usuarios
async function obtenerUsuarios() {
    try {
        // Hacemos la petición GET a la API
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');

        // Convertimos la respuesta en formato JSON
        const usuarios = await respuesta.json();

        // Iteramos sobre los usuarios para mostrar nombre y correo
        usuarios.forEach(usuario => {
            console.log(`Nombre: ${usuario.name}, Email: ${usuario.email}`);
        });
    } catch (error) {
        // Manejamos posibles errores
        console.error('Error al obtener los usuarios:', error);
    }
}

// Llamamos a la función para obtener y mostrar los usuarios
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