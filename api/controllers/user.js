function getUsers(request, response, next) {
  response.status(200).json({ email: "test@email.com" });
}

export default {
  getUsers,
};
