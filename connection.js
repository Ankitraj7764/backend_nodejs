const express=require("express")
const mongoose=require("mongoose")
const app = express();
const dbUrl = 'mongodb://127.0.0.1:27017/backend_nodejs';
mongoose.connect(dbUrl);