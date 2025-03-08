const Router = require("express");
const route = Router();

route.get('/', async (req, res) => {
    const response = {status: 200, res: "Probando healthcheck status OK"}
    return res.status(response.status).json({res: response.res});
});

module.exports = route;