const { validationResult } = require('express-validator');


const validarCampos = ( req, res, next ) => {

    // Validar los errores que me llegan con express-validator
    const errors = validationResult(req);
    if ( !errors.isEmpty() ) {
        return res.status(400).json(errors);
    }

    next();
}


module.exports = {
    validarCampos
}