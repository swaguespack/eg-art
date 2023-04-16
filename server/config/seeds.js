const db = require('./connection');
const { User, Art} = require('../models');

db.once('open', async () => {
  
    await User.deleteMany();
    await Art.deleteMany();


    await Art.create ({
        _id: 0,
        title: 'New Art',
        artist: 'New Artist',
        
    });

    await User.create({
        username: 'Shellby',
        email: 'shellby@testmail.com',
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