const EmailAlreadyExists = (email) => {
  return {
    error: {
      message: 'Email ' + email + ' is already in use.',
      code: 2000
    }
  }
};

module.exports = {
  EmailAlreadyExists
};