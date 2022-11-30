require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./routes/auth");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");
const app = express();

app.use(
	cookieSession({
		name: "session",
		keys: [process.env.KEYS],
		maxAge: 24 * 60 * 60 * 100,
		secure:true
	})
);//for storing user's credentials in a cookie session 

app.use(passport.initialize());//to initialize passport library in order to use Google OAuth and Facebook OAuth
app.use(passport.session());

app.use(
	cors({
		origin: "https://fliqa-auth.netlify.app",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);//in order to avoid CORS error we have to allow access for the api for the specific sites 

app.use("/auth", authRoute);//send requests containing /auth to authRoute

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listenting on port ${port}...`));