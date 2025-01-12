import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.services';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
