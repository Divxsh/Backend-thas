var express = require("express");
var router = express.Router();
var registerInitialChecks = require("../middlewares/registerchecks");
var { register, registerSuperAdmin } = require("../controllers/register");
var check = require('../middlewares/checksuperadmin')

router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

/**
 * @require {email, password , confirm password}
 * @description
 * Level - 1
 * Security , Performance and Edge Cases
 * Email validate
 * Password Validate
 * Password == confirm password
 * Level - 2
 * Js and Sql injection (Home Work)
 * Level - 3
 * Check if email Already exists
 * password hash
 * email lowercase
 **/

router.use(express.json());
router.post("/register", registerInitialChecks, register);
router.post("/register-super-admin", registerInitialChecks, registerSuperAdmin);
router.get("/super",check)
module.exports = router;
