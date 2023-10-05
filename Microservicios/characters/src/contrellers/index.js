const {catchedAsync}= require("../utils")
module.exports= {
    getCharacters: catchedAsync(require("./getCharacters")),//getCharacters: require("./getCharacters")
    createCharacters: catchedAsync (require("./createCharacters")), //createCharacters: require("./createCharacters") 
    
};