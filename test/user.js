import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server.js";

const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

/**
 * @description - Tests GET /api/user Route
 */
describe("GET /api/user", () => {
  // checks if correct user data is returned
  it("it should GET user data", (done) => {
    chai
      .request(app)
      .get("/api/user")
      .query({ username: "testuser" })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  // checks for error response if username is incorrect
  it("it should return error", (done) => {
    chai
      .request(app)
      .get("/api/user")
      .query({ username: "23234hbchsygfe77" })
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a("object");
        done();
      });
  });
});

/**
 * @description - Tests GET /api/repos Route
 */
describe("GET /api/repos", () => {
  // checks if user's repository data is returned succefully
  it("should return a JSON object with the user's repositories", async () => {
    const res = await chai
      .request(app)
      .get("/api/repos")
      .query({ username: "KshitijDarekar", per_page: 10, page: 1 });
    expect(res).to.have.status(200);
    expect(res.body).to.be.an("array");
  });

  // checks for error response if username is incorrect
  it("should return a 404 error if the user cannot be found", async () => {
    const res = await chai
      .request(app)
      .get("/api/repos")
      .query({ username: "xxx99044090x4", per_page: 10, page: 1 });
    expect(res).to.have.status(404);
  });
});
