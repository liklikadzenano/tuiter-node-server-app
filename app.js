import mongoose from "mongoose";


import express from "express"
import cors from 'cors'   // import the new cors library
import HelloController from "./controller/hello-controller.js";
import UserController from "./controller/users/users-controller.js";
import TuitsController from "./controller/tuits/tuits-controller.js";

const CONNECTION_STRING = "mongodb+srv://nanoLiklikadze:Snowbell@cluster0.c4upre4.mongodb.net/tuiter?retryWrites=true&w=majority"
                          || "mongodb://localhost:27017/tuiter"
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())   // import the new cors library
app.use(express.json()); // parse JSON from HTTP request body
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);
