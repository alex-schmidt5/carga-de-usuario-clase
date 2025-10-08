import Usuario from './classes/Usuario.js';

const form = document.getElementById("formulario");
const tabla = document.getElementById("tabla");

mostrarTabla();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form.nombre.value;
    const apellido = form.apellido.value;
    const telefono = form.telefono.value;
    const email = form.email.value;
    const activo = form.activo.checked;

    const id = Usuario.items.length + 1;
    const nuevo = new Usuario(id, nombre, apellido, telefono, email, activo);

    Usuario.items.push(nuevo);
    localStorage.setItem("usuarios", JSON.stringify(Usuario.items));

    form.reset();
    mostrarTabla();
});

function mostrarTabla() {
    tabla.innerHTML = "";
    Usuario.items.forEach(u => {
        tabla.innerHTML += `
            <tr>
                <td>${u.id}</td>
                <td>${u.nombre}</td>
                <td>${u.apellido}</td>
                <td>${u.telefono}</td>
                <td>${u.email}</td>
                <td>${u.activo ? "Sí" : "No"}</td>
            </tr>
        `;
    });
}
