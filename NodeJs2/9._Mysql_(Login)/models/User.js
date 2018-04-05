const Model = require('objection').Model;

class User extends Model {
    static get tableName() {
        return "users";
    }

    // validates the json values and makes sure to throw errors before manipulating the database
    static get jsonSchema () {
        return {
          type: 'object',
          required: ['username', 'password'],
    
          properties: {
            id: {type: 'integer'},
            username: {type: 'string', minLength: 1, maxLength: 255},
            password: {type: 'string', minLength: 1, maxLength: 255},
            firstName: {type: 'string', minLength: 1, maxLength: 255},
            lastName: {type: 'string', minLength: 1, maxLength: 255},
            telephoneNumber: {type: 'string'}
          }
        }
    };
}

module.exports = User;