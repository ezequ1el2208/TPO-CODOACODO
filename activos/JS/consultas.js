var listaConsultas = [];

function agregarConsultaAlSistema(paramNombre, paramApellido, paramEmail, paramTelefono, paramMensaje) {

    var nuevaConsulta = {
        nombre: paramNombre,
        apellido: paramApellido,
        email: paramEmail,
        telefono: paramTelefono,
        mensaje: paramMensaje,
    };

    listaConsultas.push(nuevaConsulta);
    guardarListaConsultas(listaConsultas);
}

function obtenerListaConsultas() {
    var listaGuardada = localStorage.getItem('consultas');
    if (listaGuardada == null) {
        listaConsultas = [];
    } else {
        listaConsultas = JSON.parse(listaGuardada);
    }
    return listaConsultas
}

obtenerListaConsultas();

function guardarListaConsultas(paramList) {
    localStorage.setItem('consultas', JSON.stringify(paramList));
}

document.querySelector('.contacto__btn').addEventListener('click', salvarConsulta);

function salvarConsulta() {
    var salvarNombre = document.getElementById('nombre').value;
    var salvarApellido = document.getElementById('apellido').value;
    var salvarEmail = document.getElementById('correoelectronico').value;
    var salvarTelefono = document.getElementById('telefono').value;
    var salvarMensaje = document.getElementById('mensaje').value;

    agregarConsultaAlSistema(salvarNombre, salvarApellido, salvarEmail, salvarTelefono, salvarMensaje);
}


