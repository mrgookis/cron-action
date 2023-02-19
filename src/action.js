const mongoose = require('mongoose');
const db = require('./models')

mongoose.connect(process.env.MONGODB_URI || 'mongodb:localhost/todo');

async function seed() {
    const seedData = [
        {title: 'cron action', body: 'cron job', isComplete: true},
        {title: 'cron action - 2', body: 'cron job - 2', isComplete: true}
    ]
    db.Todo.collection.insertMany(seedData).then(data => {
        console.log(`${data.result.n} records inserted!`)
    }).catch(err => console.log(err));
}

seed()