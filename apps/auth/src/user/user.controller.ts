import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  // Change 'AuthService' to 'UsersServices' to match your proto file
  @GrpcMethod('UsersServices', 'CreateUser')
  async createUser(createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // Add other methods to match your proto file
  @GrpcMethod('UsersServices', 'FindAllUsers')
  async findAllUsers() {
    return this.userService.findAll();
  }

  // @GrpcMethod('UsersServices', 'FindOneUser')
  // async findOneUser(data: { id: string }) {
  //   return this.userService.findOne(data.id);
  // }

  // @GrpcMethod('UsersServices', 'UpdateUser')
  // async updateUser(updateUserDto: UpdateUserDto) {
  //   return this.userService.update(updateUserDto.id, updateUserDto);
  // }

  // @GrpcMethod('UsersServices', 'RemoveUser')
  // async removeUser(data: { id: string }) {
  //   return this.userService.remove(data.id);
  // }
}