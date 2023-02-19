const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const TodoSchema = new Schema( {
title: {type: String, required: true},
author: {type: String, required: true},
body: {type: String},
createdAt: {type: Date, default: Date.now()},
updatedAt: {type: Date},
isComplete: {type: Boolean},
})

const Todo = mongoose.model('Todo',TodoSchema);

module.exports = Todo;