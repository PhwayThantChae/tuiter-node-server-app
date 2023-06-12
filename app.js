import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import tuitsController from './controllers/tuits/tuits-controller.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

tuitsController(app);
HelloController(app);
UserController(app);
app.listen(4000);