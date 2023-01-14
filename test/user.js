import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js';

const should = chai.should();

chai.use(chaiHttp);

/** 
* @description - Tests GET /api/user Route
*/
describe('GET /api/user', () => {
    // checks if correct user data is returned
    it('it should GET user data', (done) => {
        chai.request(app)
            .get('/api/user')
            .query({ username: 'testuser' })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    // checks for error response if username is incorrect
    it('it should return error', (done) => {
        chai.request(app)
            .get('/api/user')
            .query({ username: '23234hbchsygfe77' })
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
                done();
            });
    });
});
