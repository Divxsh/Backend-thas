const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("User", {
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	confirmPassword: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	role:{
		type:DataTypes.STRING,
		allowNull: false,
		defaultValue:"user"
	}
});

module.exports = User;
