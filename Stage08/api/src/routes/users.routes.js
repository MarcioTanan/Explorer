const {Router} = require('express');

const usersRoutes = Router();


usersRoutes.post("/", (request, response) => {
  const {name , email, password} = request.body;

   response.json(`Usuário: ${name}. E-mail: ${email}. E a senha é: ${password}`);
});

module.exports = usersRoutes;