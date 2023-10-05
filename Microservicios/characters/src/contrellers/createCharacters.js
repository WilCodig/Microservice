//const Character = require ("../data");
const {response} = require ("../utils");
const axios = require("axios");

module.exports= async (req, res)=>{
    //const newCharacter= await Character.create();
    const newCharacter = await axios.post("http://database:8004")
    response (res, 201, newCharacter); //res.status (200).send("Creando Personajes");
    
    
};