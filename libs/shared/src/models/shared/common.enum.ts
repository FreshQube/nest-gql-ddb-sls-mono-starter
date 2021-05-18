import { registerEnumType } from '@nestjs/graphql';

enum KeyType {
  User = 'USER',
}

registerEnumType(KeyType, {
  name: 'KeyType',
});

export { KeyType };
