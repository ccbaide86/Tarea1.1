// Ejercicio 2: Simulación de una Operación Asíncrona con Promesas
function consultarBaseDeDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numeroAleatorio = Math.floor(Math.random() * 100);
            if (numeroAleatorio % 2 === 0) {
                resolve("Consulta exitosa");
            } else {
                reject("Error en la consulta");
            }
            console.log(numeroAleatorio)
        }, 3000);
    })
}

consultarBaseDeDatos()
    .then((mensaje) => {
        console.log(mensaje); // Salida despues de 3 segundos: Operacion exitosa 
    })
    .catch((error) => {
        console.error(error);
    })


// Ejemplo Practico: Tarea Asincrona
// function tareaAsincrona() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const exito = true; // Cambia a false para simular un error
//             if (exito) {
//                 resolve("Operacion exitosa");
//             } else {
//                 reject("Error en la operacion")
//             }
//         }, 2000);
//     })
// }

// tareaAsincrona()
//     .then((mensaje) => {
//         console.log(mensaje); // Salida despues de 2 segundos: Operacion exitosa
//     })
//     .catch((error) => {
//         console.error(error);
//     })