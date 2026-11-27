export const successResponse = (
  res,
  data = null,
  message = "success",
  statusCode = 200,
) => {
  return res.status(statusCode ?? 200).json({
    error: false,
    message,
    data,
  });
};
export const errorResponse = (
  res,
  message = "Something went wrong",
  statusCode = 500,
  data = null,
) => {
  return res.status(statusCode).json({
    error: true,
    message,
    data,
  });
};

export const validationErrorResponse = (
  res,
  errors,
  message = "Validation failed",
) => {
  return res.status(422).json({
    error: true,
    message,
    data: errors,
  });
};
