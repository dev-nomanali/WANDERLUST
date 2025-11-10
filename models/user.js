const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");


const reviewSchema = new Schema({
    comment: String,
    rating: {
        type:Number,
        main: 1,
        max: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const revieSchema = new Schema({
    comment: String,
    rating: {
        type:Number,
        main: 1,
        max: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
const reviSchema = new Schema({
    comment: String,
    rating: {
        type:Number,
        main: 1,
        max: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});