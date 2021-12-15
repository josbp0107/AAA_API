import Rol from '../models/Roles.js'

export const crearRoles = async () => {

    try {
        const count = await Rol.estimatedDocumentCount();

        if (count > 0) return;

        const values = await Promise.all([
            new Rol({name: 'administrador'}).save(),
            new Rol({name: 'usuario interno'}).save(),
            new Rol({name: 'usuario externo'}).save(),
        ]);

        console.log(values)

    } catch (err) {
        console.log(err)
    }

}