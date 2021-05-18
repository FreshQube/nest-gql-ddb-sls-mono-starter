export const UserSchema = {
  name: {
    type: String,
  },
  subscribed: {
    type: Number,
  },
  synced: {
    type: Boolean,
  },
  verificationCode: {
    type: Number,
  },
  isVerified: {
    type: Boolean,
  },
};
