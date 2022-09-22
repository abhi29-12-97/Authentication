// Setting up google Auth strategy using passport

import passport from "passport";
import { Strategy as googleStrategy } from "passport-google-oauth20";
import crypto from "crypto";
import User from "../models/Users.js";
import * as dotenv from "dotenv";
dotenv.config();
const authenticator = async (accessToken, refreshToken, profile, done) => {
  const user = await User.findOne({ email: profile.emails[0].value });
  console.log(user);
  if (user) {
    console.log("authenticator ends", user);
    return done(null, user);
  }
  try {
    const newUser = await User.create({
      name: profile.displayName,
      email: profile.emails[0].value,
      password: crypto.randomBytes(20).toString("hex"),
    });
    console.log("authenticator new user ends", newUser);
    return done(null, newUser);
  } catch (error) {
    console.log(error);
  }
};

passport.use(
  new googleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret:
        process.env.CLIENT_SECRET || "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",
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    authenticator
  )
);

export default passport;
