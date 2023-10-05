const { Router } = require("express");
const { getFilms, createFilms } = require("../controllers");
const { filmsValidation } = require("../middlewares");

const router = Router();

router.get("/Film", getFilms);
router.post("/create", filmsValidation, createFilms);

module.exports = router;