const express = require("express");
const app = express();

// Middleware -  It is a function that execute before the main function execute.
// Give persmission
// It is used Time of login

const checkAdmin = (req, res, next) => {
	if (req.query.admin === "true") {
		next();
	} 
    else {
		res.status(400).send("You are not a admin User");
	}
};

const sendRes = (req, res) => {
    console.log(req.body);
	res.status(200).send(req.body);
};

// app.use(express.urlencoded());
// app.use(express.text());
app.use(express.json());
/*
 * {
 *     "email": "dg5@gmail.com",
 *     "password": "Dg_12345",
 *     "confirmPassword": "Dg_12345"
 * }
*/

app.use(checkAdmin);

app.post("/query", sendRes);

app.listen("5000", () => {
	console.log("App is listening at http://localhost:3000/");
});
