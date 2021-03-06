require("dotenv").config();

module.exports = {
	sequelize_database: process.env.SEQUELIZE_DATABASE,
	sequelize_username: process.env.SEQUELIZE_USERNAME,
	sequelize_password: process.env.SEQUELIZE_PASSWORD,
	sequelize_host: process.env.SEQUELIZE_HOST,
	sequelize_dialect: process.env.SEQUELIZE_DIALECT,
	port: process.env.PORT,
	secret: process.env.SECRET,
};
