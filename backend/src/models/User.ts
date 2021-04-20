import { Model } from 'objection';

export default class User extends Model {
  id!: number;
  username!: string;
  password!: string;
  firstname!: string;
  lastname!: string;

  static tableName = 'users';

  static jsonSchema = {
    type: 'object',
    required: ['username', 'password', 'firstname', 'lastname'],
    properties: {
      id: { type: 'integer' },
      username: { type: 'string', minLength: 1, maxLength: 255 },
      password: { type: 'string', minLength: 1, maxLength: 255 },
      firstname: { type: 'string', minLength: 1, maxLength: 255 },
      lastname: { type: 'string', minLength: 1, maxLength: 255 },
    },
  };
}
