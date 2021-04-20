import { Model } from 'objection';
import User from './User';
export default class Note extends Model {
  id!: number;
  author!: string;
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
      author: {
        relation: Model.HasOneRelation,
        modelClass: User,
        join: {
          from: 'notes.author',
          to: 'users.id',
        },
      },
    };
  }
}
