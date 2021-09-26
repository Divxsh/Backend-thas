const fs = require("fs");
var args = process.argv;

if (args[2] === "mkdir") {
	try {
		fs.mkdirSync(args[3]);
		console.log("Created");
	} catch (err) {
		console.log(err.path + " is Exist.");
	}
} 
else if (args[2] === "mkfile") {
	fs.writeFileSync(args[3], args[4], function (err) {
		if (err) {
			console.log("some went wrong");
		} else {
			console.log("Created");
		}
	});
} 
else if (args[2] === "rf") {
	const read = fs.readFileSync(args[3], "utf-8");
	console.log(read);
} 
else if (args[2] === "wf") {
	fs.appendFileSync(args[3], args[4]);
} 
else if (args[2] === "rename") {
	fs.renameSync(args[3], args[4]);
} 
else if (args[2] === "rmf") {
	fs.unlinkSync(args[3]);
} 
else if (args[2] === "-rmdir") {
	try {
		const rmdir = fs.rmdirSync(args[3]);
	} catch (err) {
		console.log("Something Went Wrong.");
	}
} 
else {
	console.log("Wrong Command");
}
