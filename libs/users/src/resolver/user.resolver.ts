import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from '../users.service';
import {
  User,
  CreateUserInput,
  UpdateUserInput,
  CountUserInput,
} from '@libs/shared';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(/* istanbul ignore next */ () => User)
  createUser(@Args('input') input: CreateUserInput) {
    return this.userService.create(input);
  }

  @Mutation(/* istanbul ignore next */ () => User)
  updateUser(@Args('pk') pk: string, @Args('input') input: UpdateUserInput) {
    return this.userService.update({ pk }, input);
  }

  @Mutation(() => Boolean)
  deleteUser(@Args('pk') pk: string) {
    return this.userService.delete({ pk });
  }

  @Query(/* istanbul ignore next */ () => User)
  user(@Args('pk') pk: string) {
    return this.userService.findOne({ pk });
  }

  @Query(/* istanbul ignore next */ () => [User])
  users() {
    return this.userService.findBySk();
  }

  @Query(/* istanbul ignore next */ () => Number)
  getUserCount(@Args('input') input: CountUserInput) {
    return this.userService.getUserCounts(input);
  }
}
