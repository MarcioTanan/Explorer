class UserCreateService{
  constructor(userRepository){

  }


  async execute({name, email, password}){
    
    const userRepository = new UserRepository()

    const checkUserExist = await userRepository.findByEmail(email)


    if(checkUserExist){
      throw new AppError('Este e-mail já está em uso.')
    }

    const hashedPassword =await hash(password, 8);

    await userRepository.create({name, email, password:hashedPassword})


  }

}

module.exports = UserCreateService