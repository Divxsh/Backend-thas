const express = require("express");
console.log(express.application);
const app = express();
console.log(app);

/*
 * CRUD post,get,put,delete
 * httpResponseCode
 * Security , performance  & Edge Cases
 * In bakend We use Bottom to top approach
 * http://localhost:3000/products?limit=50&q=something => query params
 * encodeURI()
*/

app.get("/", (req, res) => {
	res.status(200).send("hello");
});

app.get("/products", (req, res) => {
	res.send(req.query.q);
});

app.get("/ab?cd", (req, res) => {
	res.send("question mark ?");
});
app.get("/abc+d", (req, res) => {
	res.send("plus+");
});
app.get("/ab*cd", (req, res) => {
	res.send("astrike *");
});
app.get("/ab{cd}?e", (req, res) => {
	res.send("astrike *");
});

app.get(/a/, (req, res) => {
	//regex starting with a
	res.send("astrike *");
});

app.get(/.*fly$/, (req, res) => {
	res.send("astrike *");
});

app.get("/user/:userId/books/:bookId", (req, res) => {
	res.send(req.params);
});

app.post("/", slash)  ;
app.put("/", slash);
app.delete("/", slash);


app.listen(3000);
