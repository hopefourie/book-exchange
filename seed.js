const { green, red } = require('chalk');
const { db, User, Post } = require('./server/db');

const seedUsers = [
  {
    email: 'john@john.com',
    username: 'live2read',
    password: "12345"
  },
  {
    email: 'sarah@sarah.com',
    username: 'bookluvr493',
    password: "12345"
  },
  {
    email: 'nicky@nicky.com',
    username: 'pageturner22',
    password: "12345"
  },
];

const seedPosts = [
  {
    heading:"Looking for...",
    text: "a gay murder mystery",
    userId: 1
  },
  {
    heading:"Does anyone want...",
    text: "an alien romance novel?",
    userId: 2
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(seedUsers.map((user) => User.create(user)));
    await Promise.all(seedPosts.map((post) => Post.create(post)));
    console.log(green('Database successfully seeded 🍪'));
    db.close();
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
