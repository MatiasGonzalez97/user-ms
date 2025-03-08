const Router = require("express");
const userService = require("../services/userService");
const route = Router();

route.post('/fetchGoogleData', async(req, res) => {
  const {name, email, uid, profilePic} = req.body;
  const response = await userService.receiveGoogleData(name, email, uid, profilePic);
  return res.status(response.status).json({res: response.res});
})


module.exports = route;



