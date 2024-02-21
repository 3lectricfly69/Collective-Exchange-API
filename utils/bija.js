const connection = require('../config/connection');
const { Friend, Msg } = require('../model');
const { getFriendID, getMsg } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
console.log('connected');

    let FriendCheck = await connection.db.listCollections({ name: 'Friend' }).toArray();
    if (FriendCheck.length) {
    await connection.dropCollection('Friend');
    }

    let MsgCheck = await connection.db.listCollections({ name: 'Msg'}).toArray();
    if (MsgCheck.length) {
    await connection.dropCollection('Msg');
    }

const Msg = [];

// Loop 20 times -- add students to the students array
for (let i = 0; i < 20; i++) {
  // Get some random assignment objects using a helper function that we imported from ./data
const Msg = getMsg(20);

const fullName = getRandomName();
const first = fullName.split(' ')[0];
const last = fullName.split(' ')[1];

Friend.push({
    first,
    last,
    Msg
});
}

// Add students to the collection and await the results
const FriendData = await Friend.insertMany(Friends);


// Log out the seed data to indicate what should appear in the database
console.table(Friends);
console.info('Seeding complete! 🌱');
process.exit(0);
});