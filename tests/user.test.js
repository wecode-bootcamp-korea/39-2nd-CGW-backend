const request = require("supertest");
const axios = require("axios");

const { createApp } = require("../app");
const { database } = require("../src/models/dataSource");
const { JsonWebTokenError } = require("jsonwebtoken");

jest.mock("axios");
describe("user", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await AppDataSource.initialize();
  });

  afterAll(async () => {
    await AppDataSource.query(`TRUNCATE users`);
    await AppDataSource.destroy();
  });

  test("SUCCESS : Updated user info", async () => {
    await appDataSource.query(
      `INSERT INTO users (kakao_id)
        VALUES (12345)`
    );
    await request(app)
      .post("/users/signin")
      .set({
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImV4cGlyZXNJbiI6IjMwIGRheXMiLCJpYXQiOjE2Njk5MDA3NTF9.JCB5xe41o2Mg2f3nncmOm8ShTr3Z6wv_roeuctv-6fo",
      })
      .send({
        name: "Sangwon Cho",
        nickname: "Joe",
        birth: 19991231,
        phone: "01045678932",
        email: "cho@gmail.com",
      })
      .expect(200)
      .expect({ message: "Updated User Information" });
  });
});
