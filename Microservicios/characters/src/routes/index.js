
const {Router}= require ("express");
//const controllers = require("../contrellers");
const { getCharacters, createCharacters } = require("../controllers");
//const middlewares = require("../middlewares");
const { characterValidation } = require("../middlewares");

const router = Router();

//router.get("/", controllers.getCharacters);
router.get("/", getCharacters);
//router.post("/", middlewares.characterValidation, controllers.createCharacters);
router.post("/characters/create",  characterValidation, createCharacters);


module.exports= router;


