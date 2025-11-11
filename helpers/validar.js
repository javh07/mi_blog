const validator = require("validator");

const validarArticulo = (parametros) => {
    // Validar que los parámetros existan
    if (!parametros || typeof parametros !== 'object') {
        throw new Error("Los parámetros son requeridos");
    }

    // Detalles de validación para debugging
    const errores = [];

    // Validar título
    if (!parametros.titulo) {
        errores.push("El título es requerido");
    } else if (typeof parametros.titulo !== 'string') {
        errores.push("El título debe ser texto");
    } else if (validator.isEmpty(parametros.titulo.trim())) {
        errores.push("El título no puede estar vacío");
    } else if (!validator.isLength(parametros.titulo, { min: 5 })) {
        errores.push("El título debe tener al menos 5 caracteres");
    }

    // Validar contenido
    if (!parametros.contenido) {
        errores.push("El contenido es requerido");
    } else if (typeof parametros.contenido !== 'string') {
        errores.push("El contenido debe ser texto");
    } else if (validator.isEmpty(parametros.contenido.trim())) {
        errores.push("El contenido no puede estar vacío");
    }

    // Validar Numero_edicion
    if (parametros.Numero_edicion === undefined || parametros.Numero_edicion === null || parametros.Numero_edicion === '') {
        errores.push("El Numero_edicion es requerido");
    } else if (isNaN(Number(parametros.Numero_edicion))) {
        errores.push("El Numero_edicion debe ser un número");
    }

    // Si hay errores, lanzar excepción
    if (errores.length > 0) {
        throw new Error(errores.join(", "));
    }

    return true;
};

module.exports = {
    validarArticulo
};