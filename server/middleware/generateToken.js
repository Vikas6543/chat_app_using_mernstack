const jwt = require('jsonwebtoken');

const generateAuthToken = (userId) => {
  const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
  return token;
};

module.exports = generateAuthToken;
