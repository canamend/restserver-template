const { response } = require("express");
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const login = async(req, res = response) => {

    const { email, password } = req.body;

    try {
        //TODO: Verifical si el email existe
        const user = await User.findOne({email});
        if( !user ){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - email'
            })
        }
        //TODO: Verificar si el user está activo
        if( !user.state  ){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - state: false'
            });
        }

        //TODO: Verifical la contraseña
        const validPassword = bcrypt.compareSync( password, user.password );
        if( !validPassword  ){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - Contraseña: incorrecta'
            });
        }
        //TODO: Generar JWT
        res.json({
            msg: 'Ok login'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
    }

}

module.exports = {
    login
}