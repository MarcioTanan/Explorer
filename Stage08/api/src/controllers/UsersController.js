class UsersController {

create(request, response){
  const {name , email, password} = request.body;
  response.json(`Usuário: ${name}. E-mail: ${email}. E a senha é: ${password}`);
}


}
module.exports = UsersController