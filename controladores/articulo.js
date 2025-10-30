const validator = require("validator");

const prueba = (req, res) => {
    return res.status(200).json({
        mensaje: "Acción de prueba en mi controlador de artículos"
    });
};

const curso = (req, res) => {
    
    console.log("Ruta probando funcionando");

    return res.status(200).json([{
        curso : "Master en React",
        autor : "Jose Antonio Varela",
        url : "joseantoniovarela.com"
        
        
    }]);
};

const saludo = (req, res) => {
    return res.status(200).json({
        mensaje: "Hola"
    });
};

const despedida = (req, res) => {
    return res.status(200).json({
        mensaje: "Adiós"
    });
};




const crear = (req, res) => {
    //Recoger paramámetros por POST a guardar
    let parametros = req.body;
    //Validar datos
    try{
        let validar_titulo = !validator.isEmpty(parametros.titulo) &&
        validator.isLength(parametros.titulo, { min: 5, max: undefined});
        let validar_contenido = !validator.isEmpty(parametros.contenido);
        
        if(!validar_titulo || !validar_contenido){
            throw new Error("No se ha validado la información");

        }

        }catch(error){
        return res.status(400).json({
            mensaje: "Faltan datos por enviar"
        });
    }

    //Crear el objeto a guardar

    //Asignar valores a objeto basado en el modelo (manual o automático)

    //Guardar el articulo en la base de datos

    //Devolver el resultado
     return res.status(200).json({
        mensaje: "Acción de guardar", 
        parametros,
    });

    
}

module.exports = {
    prueba, 
    curso,
    crear,
    saludo,
    despedida
};







