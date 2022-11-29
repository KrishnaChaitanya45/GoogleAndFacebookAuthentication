const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const FaceBookStrategy = require("passport-facebook").Strategy;

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "https://auth-server-pwva.onrender.com/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);


passport.use(
	new FaceBookStrategy(
		{
			clientID: process.env.FACEBOOK_ID,
			clientSecret: process.env.FACEBOOK_SECRET,
			callbackURL: "https://auth-server-pwva.onrender.com/auth/facebook/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});