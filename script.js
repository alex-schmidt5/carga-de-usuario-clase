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

let usuarios = [];
let id = 1;

const formulario = document.getElementById("formulario");
const tabla = document.getElementById("tabla");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const activo = document.getElementById("activo").checked;

    const nuevoUsuario = new Usuario(id, nombre, apellido, telefono, email, activo);
    usuarios.push(nuevoUsuario);
    id++;

    mostrarTabla();

    formulario.reset();
});

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
