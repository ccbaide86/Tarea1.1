// Ejercicio 5: Gestión de Tareas Pendientes
let tareas = [];

// Agregar una tarea
function agregarTarea(descripcion) {
    const tarea = {
        descripcion: descripcion,
        completada: false
    };
    tareas.push(tarea);
    console.log(`Tarea agregada: "${descripcion}"`);
}

// Marcar una tarea como completada
function marcarTareaComoCompletada(descripcion) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tarea = tareas.find(t => t.descripcion === descripcion);
            if (tarea) {
                tarea.completada = true;
                resolve(`Tarea completada: "${descripcion}"`);
            } else {
                reject(`Error: Tarea no encontrada: "${descripcion}"`);
            }
        }, 1000); // Simulación de operación asíncrona con 1 segundo de espera
    });
}

// Listar tareas pendientes
function listarTareasPendientes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const tareasPendientes = tareas.filter(t => !t.completada);
            resolve(tareasPendientes);
        }, 1000); // Simulación de operación asíncrona con 1 segundo de espera
    });
}

// Listar tareas completadas
function listarTareasCompletadas() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const tareasCompletadas = tareas.filter(t => t.completada);
            resolve(tareasCompletadas);
        }, 1000); // Simulación de operación asíncrona con 0.5 segundos de espera
    });
}

// Pruebas: Agregar, marcar y listar
async function gestionarTareas() {
    agregarTarea("Comprar leche");
    agregarTarea("Llamar al médico");
    agregarTarea("Estudiar JavaScript");

    try {
        const resultado = await marcarTareaComoCompletada("Comprar leche");
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }

    listarTareasPendientes().then((tareasPendientes) => {
        console.log("Tareas pendientes:");
        tareasPendientes.forEach(t => console.log(`- ${t.descripcion}`));
    });

    listarTareasCompletadas().then((tareasCompletadas) => {
        console.log("Tareas completadas:");
        tareasCompletadas.forEach(t => console.log(`- ${t.descripcion}`));
    });
}

gestionarTareas();