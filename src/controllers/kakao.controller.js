const kakaoService = require("../services/kakao.service");
const { catchAsync } = require("../utils/errors");

const paymentReady = catchAsync(async (req, res) => {
  const {item_name, quantity, total_amount, tax_free_amount } = req.body;

  if (!item_name || !quantity || !total_amount || !tax_free_amount) {
    errorHandler("KEY_ERROR", 400)
  };

  const response = await kakaoService.readyRespose(item_name, quantity, total_amount, tax_free_amount);

  return res.status(200).json(response);
});


const approval = catchAsync(async (req, res) => {
  const {userId, totalPrice, movieOptionsSeatId, pgToken, tid} = req.body;

  if (!userId || !totalPrice || !movieOptionsSeatId || !pgToken || !tid ) {
    errorHandler("KEY_ERROR", 400)
  };

  const result = await kakaoService.approval(userId, totalPrice, movieOptionsSeatId, pgToken, tid);

  await res.status(200).json({ message: result });
});

module.exports = { paymentReady, approval };
