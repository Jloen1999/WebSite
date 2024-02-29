function validacion() {
    if (validarNombre() && validarEmail() && validarTelefono() && validarComentario() && validarCalleAndNumero() && validarCiudad() && validarProvincia() && validarCodigoPostal() && validarDni() && validarFecha()){
        return true;
    } else {
        alert('Faltan campos por rellenar');
        return false;
    }

}

function validarNombre() {
    valor = document.getElementById('nombre').value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        alert('El campo nombre no puede estar vacío');
        return false;
    }
    return true;
}

function validarApellidos() {
    valor = document.getElementById('apellidos').value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        alert('El campo nombre no puede estar vacío');
        return false;
    }
    return true;
}

function validarEmail() {
    valor = document.getElementById('email').value;
    // Validar segun email
    var expresion_regular_email = /\w+@\w+\.+[a-z]/;
    if (expresion_regular_email.test(valor)) {
        return true;
    } else {
        alert('Email erroneo, formato no válido');
        return false;
    }
}

function validarTelefono() {
    valor = document.getElementById('telefono').value;
    // Validar segun telefono
    var expresion_regular_telefono = /^\d{9}$/;
    if (expresion_regular_telefono.test(valor)) {
        return true;
    } else {
        alert('Telefono erroneo, formato no válido');
        return false;
    }
}


function validarComentario() {
    valor = document.getElementById('comentario').value;
    if (valor == null || valor.length == 0) {
        alert('El campo comentario no puede estar vacío');
        return false;
    }
    return true;
}

function validarDni() {
    valor = document.getElementById('dni').value;
    // Validar segun dni
    var expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
    if (expresion_regular_dni.test(valor)) {
        return true;
    } else {
        alert('Dni erroneo, formato no válido');
        return false;
    }
    
}

function validarFecha() {
    valor = document.getElementById('fecha').value;
    // Validar segun fecha
    var expresion_regular_fecha = /^\d{2}-\d{2}-\d{4}$/;

    if (expresion_regular_fecha.test(valor)) {
        return true;
    }else {
        alert('Fecha erronea, formato no válido');
        return false;
    }
}

function validarCodigoPostal() {
    valor = document.getElementById('codigoPostal').value;
    // Validar segun codigo postal
    var expresion_regular_codigoPostal = /^\d{5}$/;
    if (expresion_regular_codigoPostal.test(valor)) {
        return true;
    } else {
        alert('Codigo postal erroneo, formato no válido');
        return false;
    }
}

function validarCalleAndNumero() {
    valor = document.getElementById('calleYnumero').value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        alert('El campo calle y número no puede estar vacío');
        return false;
    }
    return true;
}

function validarCiudad() {
    valor = document.getElementById('ciudad').value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        alert('El campo localidad no puede estar vacío');
        return false;
    }
    return true;
}

function validarProvincia() {
    valor = document.getElementById('ciudad').value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        alert('El campo localidad no puede estar vacío');
        return false;
    }
    return true;
}


