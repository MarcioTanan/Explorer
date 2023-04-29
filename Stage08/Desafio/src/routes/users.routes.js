const { Router } = require("express");

const UsersController = require("../controllers/UsersController"); //importei a classe UsersController para uso neste arquivo, e guardei em uma constante usando seu prório nome.

const usersRoutes = Router();

const usersController = new UsersController; //instanciando a classe UsersController.


usersRoutes.post("/", usersController.create); //Criar usuários através do método create da classe UsersController. Usando o método post para enviar os dados.
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;