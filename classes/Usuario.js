export default class Usuario {
    constructor(id, nombre, apellido, telefono, email, activo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
        this.activo = activo;
    }

    static items = [];

    static {
        const guardados = localStorage.getItem("usuarios");
        if (guardados) {
            Usuario.items = JSON.parse(guardados);
        }
    }
}
