import express from "express";
import session from "express-session";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import AuthController from "./users/auth-controller.js";
import tuitsController from "./controllers/tuits/tuits-controller.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
  })
);

tuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);
app.listen(4000);
