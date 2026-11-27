class appError extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode ?? 500;
    // this.statusText = statusText;
    Error.captureStackTrace(this, this.constructor);
  }
}
export default appError;
