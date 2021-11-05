const express  = require('express');
const mongoose = require("mongoose");
const mainRoute = require('./api/routes/routesApi');
// const routes = require('./api/resources');

const app = express();
const port = process.env.PORT||3000;
const username = "daniel_Aguero";
const password = "K$UKt7UW!$Pu2*m";
const cluster = "cluster0.ed5jx";
const dbName = "myFirstDatabase";

app.use(express.json());

// Connecting to MongoDB
mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Connected successfully");
});

// Setting the server
app.use(mainRoute);
app.get('/', (req, res) => {
    res.send(`Server's running`);
});

app.use((req, res) =>{
    res.status(404).json({
        message: `Sorry, resource not found`
    });
});

app.listen(port, () => {
    console.log(`Server listening at URL: http://localhost:${port}`);
});

/* import { Mongoose } from 'mongoose';

export const  conn = Mongoose.connect("mongodb+srv://daniel_Aguero:K$UKt7UW!$Pu2*m@cluster0.ed5jx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"); */