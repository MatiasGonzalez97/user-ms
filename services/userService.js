const userModel = require('../schemas/userSchema')

const userService = {
    receiveGoogleData: async(name, email, uid, profilePic) => {
        try{
            const user = new userModel({
                name: name,
                email: email,
                uid: uid,
                profilePic: profilePic
            })
            const userExist = await userModel.findOne({ email: email});
            if(userExist) {
                return {status: 400, res: { msg:"El usuario con este correo ya existe" }}
            }
            const userSaved = await user.save();
            console.log(userSaved)
            if(!userSaved){
                throw new Error("El usuario no pudo ser creado")
            }
            const response = {status: 200, res: { name, email, uid, profilePic}}
            return response
        }catch(e) {
            return {status: 500, res: "Ocurrio un interno: " + e}
        }
    }
}

module.exports = userService