import { CreateUserDto, UpdateUserDto, User, PaginationDto, USERS_SERVICES_SERVICE_NAME, UsersServicesClient } from '@app/common';
import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, ReplaySubject } from 'rxjs';



@Injectable()
export class UserService implements OnModuleInit {

  private readonly logger = new Logger(UserService.name);
  private usersService: UsersServicesClient;

  constructor(@Inject("USER_SERVICE") private userClient: ClientGrpc) { }

  onModuleInit() {
    this.usersService = this.userClient.getService<UsersServicesClient>(USERS_SERVICES_SERVICE_NAME)
  }

  create(createUserDto: CreateUserDto): Observable<User> {
    return this.usersService.createUser(createUserDto);
  }

  findAll() {
    return this.usersService.findAllUsers({});
  }

  findOne(id: string) {
    return this.usersService.findOneUser({ id });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser({ ...updateUserDto });
  }

  remove(id: string) {
    return this.usersService.removeUser({ id });
  }

  emailUsers() {
    const users$ = new ReplaySubject<PaginationDto>();

    users$.next({ page: 0, skip: 25 });
    users$.next({ page: 1, skip: 25 });
    users$.next({ page: 2, skip: 25 });
    users$.next({ page: 3, skip: 25 });

    users$.complete();

    let chunkNumber = 0;
    this.usersService.queryUsers(users$).subscribe(users => {
      this.logger.log("ChunK ", chunkNumber, users);
      chunkNumber++;
    })
  }
}
