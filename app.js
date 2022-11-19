//app  file creates and configures an HTTP server listening for incoming HTTP requests.

import express from "express"
import cors from 'cors'   // import the new cors library

import HelloController from "./controller/hello-controller.js";
import UserController from "./controller/users/users-controller.js";
import TuitsController from "./controller/tuits/tuits-controller.js";

const app = express()
app.use(cors())   // import the new cors library
app.use(express.json()); // parse JSON from HTTP request body
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(4000)
