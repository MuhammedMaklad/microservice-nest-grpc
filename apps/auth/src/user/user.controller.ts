import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import {
  UsersServicesController,
  UsersServicesControllerMethods,
  CreateUserDto,
  UpdateUserDto,
  Empty,
  FindOneUserDto,
  PaginationDto,
  User,
  Users,
} from '@app/common';
import { Observable } from 'rxjs';

@Controller()
@UsersServicesControllerMethods()
export class UserController implements UsersServicesController {
  constructor(private readonly userService: UserService) { }

  createUser(request: CreateUserDto): Promise<User> | Observable<User> | User {
    return this.userService.create(request);
  }
  findAllUsers(request: Empty): Promise<Users> | Observable<Users> | Users {
    return this.userService.findAll();
  }
  findOneUser(request: FindOneUserDto): Promise<User> | Observable<User> | User {
    return this.userService.findOne(request.id);
  }
  updateUser(request: UpdateUserDto): Promise<User> | Observable<User> | User {
    return this.userService.update(request.id, request);
  }
  removeUser(request: FindOneUserDto): Promise<User> | Observable<User> | User {
    return this.userService.remove(request.id);
  }
  queryUsers(request: Observable<PaginationDto>): Observable<Users> {
    return this.userService.queryUsers(request);
  }
}

/*
  ? @UsersServicesControllerMethods()

  * Purpose: This is a code-generated decorator that automatically:

  * Sets up gRPC method handlers based on your Protocol Buffer definition

  * Maps gRPC service methods to controller methods

  * Handles the underlying gRPC communication boilerplate

  * Validates incoming requests against the protobuf schema

  * Serializes/deserializes messages between Protocol Buffer format and JavaScript objects

  ! Why use it: Instead of manually defining each route decorator (@GrpcMethod()) for every service method, this auto-configures everything based on your .proto file definition.
  -----------------------------------------------------
  ? UsersServicesController Interface

  * Purpose: This is a code-generated TypeScript interface that:

  * Defines the exact method signatures expected by your gRPC service

  * Ensures type safety between your Protocol Buffer definition and implementation

  * Guarantees your controller implements all required service methods

  * Provides autocomplete and compile-time checking
  
  ! Why implement it: This ensures your controller properly implements the contract defined in your .proto file, preventing runtime errors.
*/