const prueba = (req, res) => {
    return res.status(200).json({
        mensaje: "Acción de prueba en mi controlador de artículos"
    });
};

module.exports = {
    prueba
};


