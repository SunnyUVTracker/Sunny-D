// const mongoose = require('mongoose');
const { default: mongoose } = require('mongoose');
const userController = require('../server/controllers/userController');
const User = require('../server/userModel')


describe('insert', () => {
    let connection;
    let db;
  
    beforeAll(async () => {
      connection = await mongoose.connect('mongodb://127.0.0.1:27017' );

      // db = await connection.db(globalThis.__MONGO_DB_NAME__);
    });
  
    afterAll(async () => {
      await User.deleteMany({})

      await mongoose.connection.close();
    });
  
    it('should insert a doc into collection', async () => {

      const mockUser = {username: 'testname', password: 'testpassword'}
      await User.create(mockUser)
      const insertedUser = await User.findOne({username: 'testname'});
      expect(insertedUser.username).toEqual(mockUser.username);
    });

    // it('should add a new user to the database', async () => {
      // const newUser = 
    // })
  });


