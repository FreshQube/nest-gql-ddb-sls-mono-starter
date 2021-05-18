import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { CreateUserInput } from '../../shared/src/models/users/dto/create-user.input';
import {
  KeyType,
  User,
  UserKey,
  UpdateUserInput,
  CountUserInput,
} from '@libs/shared';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel('MainModel')
    private readonly model: Model<User, UserKey>,
  ) {}

  create(input: CreateUserInput) {
    return this.model.create({
      ...input,
      sk: KeyType.User,
      subscribed: new Date().valueOf(),
      synced: false,
      verificationCode: Math.floor(100000 + Math.random() * 900000),
      isVerified: false,
    });
  }

  update(key: UserKey, input: UpdateUserInput) {
    return this.model.update(key, input);
  }

  async delete(key: UserKey) {
    try {
      await this.model.delete(key);
      console.log('Successfully deleted item');
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  findOne(key: UserKey) {
    return this.model.get(key);
  }

  findBySk() {
    return this.model.query('sk').eq(KeyType.User).exec();
  }

  async getUserCounts(input: CountUserInput) {
    try {
      const res = await this.model
        .query('sk')
        .eq(KeyType.User)
        .filter('subscribed')
        .between(input.startTimestamp, input.endTimestamp)
        .count()
        .exec();
      return res.count;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }
}
