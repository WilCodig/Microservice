const data = require("../data");
const { response } = require("../utils");

module.exports = async(req, res) => {
    const planets = await data.list();
    response(res, 200, planets)
}
