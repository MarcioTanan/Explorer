const AppError = require('../utils/AppError');

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body;

    if (!name) {
      throw new AppError("Nome é obrigatório!");
    }

    response.status(201).json(`Usuário: ${name}. E-mail: ${email}. E a senha é: ${password}`);
  }
}
module.exports = UsersController