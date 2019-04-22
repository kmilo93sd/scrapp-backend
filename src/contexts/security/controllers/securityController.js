const userRepository = require('./../repositories/userRepository');
const RegisterUserService = require('./../services/RegisterUserService');
const encryptationAdapter = require('./../adapters/encryptationAdapter');
const uuidGeneratorAdapter = require('./../adapters/uuidGeneratorAdapter');
const { validationErrors } = require('./../errors/errors');

const status = async (request, response) => {
    response.status(200).json({message:"Security module is working fine."});
};

const signUp = async (request, response) => {
    const { email, password } = request.body;

    if (!email || email === ''){
        response.status(400).json(validationErrors.RequiredField('Email'))
    }

    if (!password || password === ''){
        response.status(400).json(validationErrors.RequiredField('Password'));
    }

    if (password.length < 8){
        response.status(400).json(validationErrors.InvalidPassword(password));
    }

    const service = new RegisterUserService(
      encryptationAdapter,
      uuidGeneratorAdapter,
      userRepository
      );

    const createdUser = await service.execute(email, password);

    if (createdUser.error) {
        response.status(401).json(createdUser);
    }

    response.status(201).json({
        data: createdUser
    });
};

module.exports = {
    status,
    signUp
};