function isAuthenticated(request, response, next) {
  const authenticationHeader = request.get("Authentication");
  if (!authenticationHeader) {
    const error = new Error("Not Authenticated");
    error.statusCode = 401;
    throw error;
  }

  next();
}

export default {
  isAuthenticated,
};
