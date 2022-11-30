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
});
