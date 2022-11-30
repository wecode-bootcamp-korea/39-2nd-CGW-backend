const axios = require('axios').default;
const orderDao = require("../models/order.dao")

async function readyRespose(item_name, quantity, total_amount, tax_free_amount) {
  try {
    const APP_ADMIN_KEY = process.env.APP_ADMIN_KEY;

    const params = {
      cid: "TC0ONETIME",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      item_name: item_name,
      quantity: quantity,
      total_amount: total_amount,
      tax_free_amount: tax_free_amount,
      approval_url: "http://127.0.0.1:3000",
      cancel_url: "http://10.58.52.51:3000/kakaoPayment/approval",
      fail_url: "http://10.58.52.51:3000/kakaoPayment/approval",
    };

    const headers = {
      headers: {
        Authorization: `KakaoAK ${APP_ADMIN_KEY}`,
        "Content-type": "application/x-www-form-urlencoded;charser=-utf-8",
      },
    };
  
    const response = await axios.post(
      "https://kapi.kakao.com/v1/payment/ready",
      params,
      headers
    );
  
    const { tid, next_redirect_pc_url } = response.data;
    return { tid, next_redirect_pc_url };

  } catch (error) {
    errorHandler("KAKAO_SERVER_ERROR", 400)
  }
};

async function approval(userId, totalPrice, movieOptionsSeatId, pgToken, tid) {
  try{
    const APP_ADMIN_KEY = process.env.APP_ADMIN_KEY;
    const params = {
      cid: "TC0ONETIME",
      tid: tid,
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      pg_token: pgToken,
    };
    const headers = {
      headers: {
        Authorization: `KakaoAK ${APP_ADMIN_KEY}`,
        "Content-type": "application/x-www-form-urlencoded;charser=-utf-8",
      }
    };

    const response = await axios.post('https://kapi.kakao.com/v1/payment/approve',
    params,
    headers
    );

    if (response.status == 200){
      const data = response.data; // 추후 사용할 가능성을 고려해서 넣어두었습니다.
      await orderDao.createOrders(data, userId, totalPrice, movieOptionsSeatId, tid);
    }

    return "PAYMENT_SUCCESS"

  } catch (error){
    errorHandler("KAKAO_SERVER_ERROR", 400)
  }
}

module.exports = { readyRespose, approval };
