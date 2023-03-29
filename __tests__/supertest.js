const request = require('supertest');
const server = 'http://localhost:8080';


describe('Route integration', () => {
    describe('/', () => {
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

    describe('/submit', () => {
        describe('POST', () => {
            it('responds with the total points', () => request(server)
            .post('/api/submit')
            .send({username: 'testname', date: 'testdate', points: 10})
            .then(res => {
                console.log('here is the response ---> ', res.body)
                expect(res.body).should.have.property('username')
                
            })
        //     .catch((err) =>{
        //       console.log(err)
        // })
            )
            // })
        })
    })
})