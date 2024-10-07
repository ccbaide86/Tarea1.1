// Ejercicio 3: Uso de async y await para Manejar Promesas
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

async function ejecutarConsulta() {
    try {
        const resultado = await consultarBaseDeDatos();
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}

ejecutarConsulta();

// Ejercicio 2: Simulación de una Operación Asíncrona con Promesas\
// function consultarBaseDeDatos() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const numeroAleatorio = Math.floor(Math.random() * 100);
//             if (numeroAleatorio % 2 === 0) {
//                 resolve("Consulta exitosa");
//             } else {
//                 reject("Error en la consulta");
//             }
//             console.log(numeroAleatorio)
//         }, 3000);
//     })
// }

// consultarBaseDeDatos()
//     .then((mensaje) => {
//         console.log(mensaje); // Salida despues de 3 segundos: Operacion exitosa
//     })
//     .catch((error) => {
//         console.error(error);
//     })