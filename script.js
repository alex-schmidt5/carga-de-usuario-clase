// Definición de la clase Usuario
class Usuario {
    constructor(id, nombre, apellido, telefono, email, activo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
        this.activo = activo;
    }
}

// Variables globales
let usuarios = [];
let id = 1;

// Referencias del DOM
const formulario = document.getElementById("formulario");
const tabla = document.getElementById("tabla");

// Evento de envío del formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const activo = document.getElementById("activo").checked;

    // Crear nuevo usuario usando la clase
    const nuevoUsuario = new Usuario(id, nombre, apellido, telefono, email, activo);
    usuarios.push(nuevoUsuario);
    id++;

    // Actualizar la tabla
    mostrarTabla();

    // Limpiar el formulario
    formulario.reset();
});

// Función para renderizar la tabla
function mostrarTabla() {
    tabla.innerHTML = "";
    usuarios.forEach((u) => {
        const fila = `
            <tr>
                <td>${u.id}</td>
                <td>${u.nombre}</td>
                <td>${u.apellido}</td>
                <td>${u.telefono}</td>
                <td>${u.email}</td>
                <td>${u.activo ? "Sí" : "No"}</td>
            </tr>`;
        tabla.innerHTML += fila;
    });
}
