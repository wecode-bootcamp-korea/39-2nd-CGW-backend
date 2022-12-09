const catchAsync = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch((error) => next(error));
  };
};

const globalErrorHandler = (err, req, res, next) => {
  console.error(err.stack);

  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({ message: err.message });
};

const errorObject = (errorMessage, errorCode) => {
  const err = new Error(errorMessage);
  err.statusCode = errorCode;
  throw err;
}

module.exports = { catchAsync, globalErrorHandler, errorObject };
