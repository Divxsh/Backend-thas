const emailValidate = (email) => {
	var re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return re.test(email);
};

const passwordValidate = (pass) => {
	var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
	return re.test(pass);
};

module.exports = {
	emailValidate,
	passwordValidate,
};
