const mongoose = require('mongoose');
const dotenv = require('dotenv');
const db = require('../models');

dotenv.config();

mongoose.set('strictQuery',false)

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', async () => {
  console.log('Connected to MongoDB');

  const seedData = [
    {title: 'cron action', body: 'cron job', isComplete: true},
    {title: 'cron action - 2', body: 'cron job - 2', isComplete: true}
  ];

  try {
    const result = await db.Todo.collection.insertMany(seedData);
    console.log(`${result.result.length} records inserted!`);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit();
  }
});
