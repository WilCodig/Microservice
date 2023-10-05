
//const characters= require("./characters.json");
const axios = require("axios");

module.exports= {
    // list: async()=>{
    //     return characters;
    // },
    // create: async ()=>{
    //     throw Error("Hay un error al momento de crear un perosnaje")
    // },

    list: async()=>{
        const characters = await axios.get("http://database_:8004/Character");
        
       return characters.data
     },
    create: async ({name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films}) => {
        const newCharacter = {
            name,
            height,
            mass,
            hair_color,
            skin_color,
            eye_color,
            birth_year,
            gender,
            homeworld,
            films,
        }

        return newCharacter;
    }
};




