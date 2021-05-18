import { Schema } from 'dynamoose';
import { UserSchema } from '../models/users/schema/user.schema';

export const SharedSchema = new Schema(
  {
    pk: {
      type: String,
      hashKey: true,
    },
    sk: {
      type: String,
      index: {
        name: 'SK_GSI',
        global: true,
      },
    },
    // Other shared attributes (if you have any)
    ...UserSchema,
  },
  {
    timestamps: true,
  },
);
