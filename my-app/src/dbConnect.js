import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mongodb:mongodb123@cluster0.xxsbg.mongodb.net/movies-app");
let db = mongoose.connection;

export default db;