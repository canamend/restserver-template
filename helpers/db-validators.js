const Role = require('../models/role');
const User = require('../models/user')


const isRoleValid = async(role = '') => {

    const roleExists = await Role.findOne( { role } );
    if( !roleExists ){
            throw new Error(`El rol ${ role } no está registrado en la base de datos`);
    }

}

const emailExists = async( email = '') => {
    const existEmail = await User.findOne({ email });
    if( existEmail ){
        throw new Error(`El email ${email} ya está registrado`)
    }   
}

const userExistsById = async( id = '') => {
    const userExists = await User.findById(id);
    if( !userExists ){
        throw new Error(`El id no existe`)
    }   
}

module.exports = {
    isRoleValid,
    emailExists,
    userExistsById
}
    
