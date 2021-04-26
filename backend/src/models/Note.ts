import { Model, QueryBuilder } from 'objection';
import User from './User';
export default class Note extends Model {
  id!: number;
  author!: number;
  title!: string;
  description!: string;

  static tableName = 'notes';

  static jsonSchema = {
    type: 'object',
    required: ['author', 'title', 'description'],
    properties: {
      id: { type: 'integer' },
      author: { type: 'integer' },
      title: { type: 'string', minLength: 1, maxLength: 255 },
      description: { type: 'string', minLength: 1, maxLength: 255 },
    },
  };

  static get relationMappings() {
    return {
      authors: {
        relation: Model.HasOneRelation,
        modelClass: User,
        filter: (query: QueryBuilder<User>) =>
          query.select('id', 'username', 'firstname', 'lastname'),
        join: {
          from: 'notes.author',
          to: 'users.id',
        },
      },
    };
  }
}
