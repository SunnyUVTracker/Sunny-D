const request = require('supertest');
const server = 'http://localhost:3000';
const { default: mongoose } = require('mongoose');
const userController = require('../server/controllers/userController');
const User = require('../server/userModel')

describe('Route integration', () => {
    //testing static files
    describe('Static file testing', () => {
      describe('GET', () => {
        // Note that we return the evaluation of `request` here! It evaluates to
        // a promise, so Jest knows not to say this test passes until that
        // promise resolves. See https://jestjs.io/docs/en/asynchronous
        it('responds with 200 status and text/html content type', () => request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200));
        it('response with a 404 status', () => request(server)
            .get('/notreal')
            .expect(404))
      });
    });


    describe('API paths', () => {
        beforeAll(async () => {
            connection = await mongoose.connect('mongodb://127.0.0.1:27017' );
            });
        
          afterAll(async () => {
            await User.deleteMany({})
            await mongoose.connection.close();
          });

        //test route paths to /api/signup

        describe('/signup',  () => {
            it('responds with a 200 status', () => request(server)
              .post('/api/signup')
              .send({username:'testusername', password: 'testpassword'})
              .expect(200)
              .then(response => {
                console.log('new user signup test: ', response)
                expect(response._body.username).toEqual('testusername');
                expect(response._body.password).not.toEqual('testpassword');
                // expect(response.zipcodeEntry).toEqual(12345)
              })
            //   .then(async ()=>{
            //     const db = await User.find({})
            //     console.log('whole database: ', db)
            //   }
            //   )
            
            
            )
            it('should have a new user in the database', async () => {
                const db = await User.find({}).exec();
                console.log('whole database: ', db);
                const user = await User.findOne({username:'testusername'}).exec();
                console.log(user);
                expect(user.username).toEqual('testusername');
                expect(user.password).not.toEqual('testpassword');
                // expect(user.zipcodeEntry).toEqual(12345);

            }
            )
        })

        //test route paths to /api/verify




        // //testing route paths to /api/submit
        // describe('/submit', () => {
        //     it('responds with the total points', () => request(server)
        //     .post('/api/submit')
        //     .send({username: 'testname', date: 'testdate', points: 10})
        //     .then(res => {
        //         console.log('here is the response ---> ', res.body)
        //         expect(res.body).should.have.property('username')
                
        //     })
        // //     .catch((err) =>{
        // //       console.log(err)
        // // })
        //     )
          
        // })
    })

        
})