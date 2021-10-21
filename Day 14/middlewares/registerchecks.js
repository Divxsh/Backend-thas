const { emailValidate, passwordValidate } = require("../utils/validation");


const registerInitialChecks = (req, res, next) => {

	const { email, password, confirmPassword } = req.body;
	console.log(req.body);

	if (
		typeof email === "string" &&
		typeof password === "string" &&
		typeof confirmPassword === "string" &&
		email.length > 0 &&
		password.length > 0 &&
		confirmPassword === password &&
		emailValidate(email) &&
		passwordValidate(password)
	) {
		next();
	} 
	else 
	{
		res.status(401).send("Initial Checks fails.");
	}
};

module.exports = registerInitialChecks;
