const db = require('./connection');
const { User} = require('../models');

db.once('open', async () => {
  
    await User.deleteMany();
  
    await User.create({
        username: 'Shellby',
        email: 'shellbyy@testmail.com',
        password: 'password12345',

    });
  
    await User.create({
        username: 'Mika',
        email: 'mika@testmail.com',
        password: 'password12345'
    });
  
    await User.create({
        username: 'Tyler',
        email: 'tyler@testmail.com',
        password: 'password12345'
    });

    console.log('users seeded');
  
    process.exit();
  });