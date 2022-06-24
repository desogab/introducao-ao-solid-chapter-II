import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("Mensagem do erro");
    }

    if (user.admin) {
      throw new Error("Mensagem do erro");
    }

    user.admin = true;
    user.updated_at = new Date();

    return user;
  }
}

export { TurnUserAdminUseCase };
