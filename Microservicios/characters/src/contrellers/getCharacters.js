const Character = require("../data");
const { response } = require("../utils");

module.exports= async(req, res)=>{
    //const characters = await Character.list();
    const characters = await data.list();
    response (res, 200, characters); //res.status(200).json(characters);
    
};