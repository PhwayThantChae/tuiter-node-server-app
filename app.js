import dotenv from 'dotenv';
import express from "express";
import session from "express-session";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import AuthController from "./users/auth-controller.js";
import tuitsController from "./controllers/tuits/tuits-controller.js";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://a5--magenta-starship-4926eb.netlify.app"],
  })
);
app.use(express.json());
app.use(
  session({
    secret: "test123",
    resave: false,
    saveUninitialized: false,
    store: new session.MemoryStore(),
  })
);
mongoose.connect("mongodb://127.0.0.1:27017/tuiter");

tuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);
app.listen(process.env.PORT || 4000);
