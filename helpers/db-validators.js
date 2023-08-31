const { Category, User, Role } = require('../models');


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

const categoryExistById = async( id = '') =>{
    const categoryExists = await Category.findOne({_id : id});
    
    if( !categoryExists ){
        throw new Error(`El id no existe`)
    }
}

module.exports = {
    categoryExistById,
    emailExists,
    isRoleValid,
    userExistsById,
}
    
