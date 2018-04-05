const Model = require('objection').Model;

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            require: ['username', 'password'],

            properties: {
                id: {type: "string"},
                username: {type: "string", minLength: 1},
                password: {type: "string", minLength: 1},
                firstName: {type: "string"},
                lastName: {type: "string"},
                telephone: {type: "string"}
            }
        }        
    }
}

module.exports = User;