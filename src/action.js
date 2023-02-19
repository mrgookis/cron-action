const mongoose = require('mongoose');
const dotenv = require('dotenv');
const db = require('../models');
dotenv.config()

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todo');

async function seed() {
    const seedData = [
        {title: 'cron action', body: 'cron job', isComplete: true},
        {title: 'cron action - 2', body: 'cron job - 2', isComplete: true}
    ]
    db.Todo.collection.insertMany(seedData).then(data => {
        console.log(`${data.result.n} records inserted!`)
    }).catch(err => console.log(err));
    // db.Todo.find({}).then(data =>console.log(data.data))
}

seed()