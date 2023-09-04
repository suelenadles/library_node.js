import mongoose from "mongoose"

mongoose.connect("mongodb+srv://adlesuxele:141521S@cluster0.vx6vpse.mongodb.net/new_project?");

let db = mongoose.connection;

export default db;