const { Router } = require("express");
const { getPlanets, createPlanets } = require("../controllers");
const { planetsValidations } = require("../middlewares");

const router = Router();

router.get("/Planet", getPlanets);
router.post("/create", planetsValidations, createPlanets);

module.exports = router;