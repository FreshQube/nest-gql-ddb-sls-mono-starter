import { Test, TestingModule } from '@nestjs/testing';
import { KeyType } from '@libs/shared';
import { UsersService } from '../users.service';
import { CommonTestImports } from '@libs/shared';
import { userJson } from './user.data';
import { UsersResolver } from './user.resolver';

let resolver: UsersResolver;

beforeAll(async () => {
  const module: TestingModule = await Test.createTestingModule({
    imports: CommonTestImports,
    providers: [UsersService, UsersResolver],
  }).compile();

  resolver = module.get<UsersResolver>(UsersResolver);
});

describe('User Resolver', () => {
  beforeAll(async () => {
    expect(resolver).toBeDefined();

    // create user records
    await Promise.all(
      userJson.map(async (input) => {
        const result = await resolver.createUser(input);
        expect(result).toMatchObject({
          ...input,
          sk: KeyType.User,
        });
        expect(result.pk).toBeDefined();
      }),
    );
  });

  it('find by pk (or) email', async () => {
    // test findByPk i.e user query
    expect(await resolver.user('device11@email')).toBeUndefined();
    expect(await resolver.user('device12@email.com')).toMatchObject({
      pk: 'device12@email.com',
    });
  });

  it('find all users by sk', async () => {
    // test findBySk i.e users query
    expect(await resolver.users()).toHaveLength(3);
  });

  it('update user', async () => {
    const users = await resolver.updateUser('device12@email.com', {
      name: 'new name',
      synced: true,
    });

    expect(users.synced).toBe(true);

    const updated = await resolver.updateUser(users.pk, {
      name: 'updated name',
      synced: false,
    });
    expect(updated).toBeDefined();
    expect(updated.synced).toBe(false);
    expect(updated.name).toBe('updated name');
  });

  it('find user counts id', async () => {
    /* Giving in timestamp from 2020 to 2025
     * just to get all available counts from seed data (usersJson File)
     */
    const users = await resolver.getUserCount({
      endTimestamp: 1746789381000,
      startTimestamp: 1589022981000,
    });
    expect(users).toBe(3);

    const usersCount = await resolver.getUserCount({
      endTimestamp: 0,
      startTimestamp: 0,
    });
    expect(usersCount).toBe(0);
  });

  it('delete user', async () => {
    const user = await resolver.deleteUser('device13@email.com');
    expect(user).toBe(true);
  });
});
