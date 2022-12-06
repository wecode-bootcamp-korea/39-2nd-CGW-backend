const kakaoService = require("../services/kakao.service");
const { catchAsync, errorObject } = require("../utils/errors");

const paymentReady = catchAsync(async (req, res) => {
    const { item_name, quantity, total_amount, tax_free_amount } = req.body;

    if ( !item_name || !quantity || !total_amount || !tax_free_amount ) {
      errorObject("KEY_ERROR", 400);
    };

    const response = await kakaoService.readyResponse(item_name, quantity, total_amount, tax_free_amount);

    const { tid, next_redirect_pc_url } = response;
    if ( !tid || !next_redirect_pc_url ) {
      errorObject(response.msg, 400);
    };

    return res.status(200).json(response);
});

const approval = catchAsync(async (req, res) => {
  const { userId, totalPrice, movieOptionsSeatId, pgToken, tid } = req.body;

  if ( !userId || !totalPrice || !movieOptionsSeatId || !pgToken || !tid ) {
    errorObject("KEY_ERROR", 400)
  };

  const result = await kakaoService.approval(userId, totalPrice, movieOptionsSeatId, pgToken, tid);
  if (result !== "PAYMENT_SUCCESS"){
    errorObject(result.msg, 400);
  }

  await res.status(200).json({message: result});
});

module.exports = { paymentReady, approval };
