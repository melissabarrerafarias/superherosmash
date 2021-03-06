const User = require('../models/User');

const resolvers = {
    Query: {
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return user;
        },
        login: async () => {

        }
    }
};

module.exports = resolvers;