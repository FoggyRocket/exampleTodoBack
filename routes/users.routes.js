const router = require("express").Router();
const {listUser,findUser} = require("../controllers/users.controller")

router.get("/list-team" ,listUser )
router.get("/team/:id",findUser )

module.exports = router;