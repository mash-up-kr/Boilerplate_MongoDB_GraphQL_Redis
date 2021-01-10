import chai from 'chai';
import chaiHttp from 'chai-http';
import expressServer from '../src/app.js';

const app = expressServer.app;

chai.use(chaiHttp);
const assert = chai.assert;

describe('Express Server Health Test', () => {
  describe('StatusCode & OK Content', () => {
    it('should health be http status 200 OK', (done) => {
      chai.request(app)
          .get('/')
          .end((err, res) => {
            if (err) {
              done(err);
              return;
            }

            assert.equal(res.status, 200);
            assert.equal(res.text, 'OK');
            done();
          });
    });
  });
});
