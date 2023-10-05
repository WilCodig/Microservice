const data = require("../data");
const { response } = require("../utils");

module.exports = async(req, res) => {
    const films = await data.list();
    response(res, 200, films)
}