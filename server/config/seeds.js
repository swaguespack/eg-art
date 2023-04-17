const db = require('./connection');
const { User, Art } = require('../models');

const artSeeds = require('./artSeeds.json');

db.once('open', async () => {
    try{
    await User.deleteMany();
    await Art.deleteMany({});

    await Art.create(artSeeds);

    await User.create({
        username: 'Shellby',
        email: 'shellby@testmail.com',
        password: 'password12345',
        savedArt: []

    });
  
    await User.create({
        username: 'Mika',
        email: 'mika@testmail.com',
        password: 'password12345',
        savedArt: []
    });
  
    await User.create({
        username: 'Tyler',
        email: 'tyler@testmail.com',
        password: 'password12345',
        savedArt: []
    });
    
    
     console.log('Art and User seeded!');
} catch (err) {
    throw err;
}

    process.exit();
  });