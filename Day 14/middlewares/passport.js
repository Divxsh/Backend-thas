const User = require("../models/userRole");
const { secret } = require("../config/config");
const { Strategy, ExtractJwt } = require("passport-jwt");
const passport = require("passport");
const UserRole = require("../models/userRole");

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: secret,
};

module.exports = (passport) => {
	passport.use(
		new Strategy(opts, async (payload, done) => {
			console.log("this is my id ", payload.user_Id);
			const user = await UserRole.findOne(
				{ where: { id: payload.user_Id } },
				(err, user) => {
					if (err) {
						return done(null, false);
					}
					if (user) {
						return done(null, user);
					} else {
						return done(null, false);
					}
				},
			);
		}),
	);
};
