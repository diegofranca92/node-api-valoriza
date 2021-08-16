import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories"

interface UserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin} : UserRequest) {

    const usersRepository = getCustomRepository(UsersRepositories)
    // Usuario precisa ter um email
    if(!email) {
      throw new Error("Email incorreto");
      
    }

    const userExists = await usersRepository.findOne({
      email,
    })

    // O email tem que ser unico
    if(userExists) {
      throw new Error("Esse usuário já existe");
      
    }

    // caso passe pelas validações acima, ele será criado
    const user = usersRepository.create({
      name,
      email,
      admin
    })

    await usersRepository.save(user)

    return user;

  }
}

export {CreateUserService}