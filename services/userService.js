const userService = {
    receiveGoogleData: async(name, email, uid, profilePic) => {
        try{
            const response = {status: 200, res: { name, email, uid, profilePic}}
            return response
        }catch(e) {
            throw new Error(error.message) 
        }
    }
}

module.exports = userService