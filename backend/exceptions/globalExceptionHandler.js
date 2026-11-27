import { errorResponse } from "../helpers/responseHelper.js";
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  return errorResponse(res, err.message ?? "Internal Server Error", statusCode);
  //   res.status(statusCode).json({
  //     error: true,
  //     msg: err.message ?? "Internal Server Error",
  //     data: null,
  //   });
};
