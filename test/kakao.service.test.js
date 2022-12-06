const request = require("supertest");
const axios   = require("axios");

const { createApp } = require("../app");
const { sqlDataSource } = require("../src/models/data-source");

describe("Kakao Payment", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await sqlDataSource.initialize().then(() => {
      console.log("Data Source has been initialized!!!");
    });
  });
  
  beforeEach(async () => {
    await sqlDataSource.query(`set FOREIGN_KEY_CHECKS = 0`);
    await sqlDataSource.query(`TRUNCATE regions`);
    await sqlDataSource.query(`TRUNCATE branches`);
    await sqlDataSource.query(`TRUNCATE branches_rooms`);
    await sqlDataSource.query(`TRUNCATE movies`);
    await sqlDataSource.query(`TRUNCATE dates`);
    await sqlDataSource.query(`TRUNCATE times`);
    await sqlDataSource.query(`TRUNCATE social_types`);
    await sqlDataSource.query(`TRUNCATE movies_branches_rooms`);
    await sqlDataSource.query(`TRUNCATE dates_times`);
    await sqlDataSource.query(`TRUNCATE movieOptions`);
    await sqlDataSource.query(`TRUNCATE users`);
    await sqlDataSource.query(`TRUNCATE seats`);
    await sqlDataSource.query(`TRUNCATE prices`);
    await sqlDataSource.query(`TRUNCATE movieOptions_seats`);
    await sqlDataSource.query(`TRUNCATE orderStatus`);
    await sqlDataSource.query(`TRUNCATE orders`);
    await sqlDataSource.query(`TRUNCATE movieOptions_seats_orders`);
    await sqlDataSource.query(`set FOREIGN_KEY_CHECKS = 1`);
  })
  
  afterAll(async () => {
    await sqlDataSource.destroy();
  })

  test("FAILED: key error", async () => {
    axios.post = await jest.fn().mockReturnValue()

    await request(app)
      .post("/kakaoPayment")
      .send({
        "quantity": 100,
        "total_amount": 20000,
        "tax_free_amount": 1
      })
      .expect(400)
      .expect({ "message": "KEY_ERROR" });
  });

  test("SUCCESS: tid and next redirect pc url received", async () => {
    axios.post = await jest.fn().mockReturnValue(
      { 
        data : {
          tid: '11aa22bb',
          tms_result: false,
          next_redirect_app_url: 'https://aaaa.com',
          next_redirect_mobile_url: 'https://bbbb.com',
          next_redirect_pc_url: 'https://cccc.com',
          android_app_scheme: 'https://dddd.com',
          ios_app_scheme: 'https://eeee.com',
          created_at: '2022-00-00T00:00:00'
        }
      }
    );

    await request(app)
      .post("/kakaoPayment")
      .send({
        "item_name": "apple",
        "quantity": 100,
        "total_amount": 20000,
        "tax_free_amount": 1
      })
      .expect(200)
      .expect({
        "tid": "11aa22bb",
        "next_redirect_pc_url": "https://cccc.com"
      });
  });
});