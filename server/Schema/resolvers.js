const { AuthenticationError } = require('apollo-server-express');
const { User, Art } = require('../models');
const { signToken } = require('../utils/auth');
const artSchema = require('../models/Art');

const resolvers = {
    Query: {
        me: async (parent, args, context ) => {
            if(context.user){
              console.log('me query called')
            const userData = await User.findOne({ _id: context.user._id}).select('-__v -password');
        
            return userData
          }

          throw new AuthenticationError('Not Logged In')
        },

        arts: async()=> {
          return Art.find().sort({ createdAt: -1 });
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return {token, user};
        },
        addUser:  async (parent, args) => {
            const user = await User.create(args);
        
            if (!user) {
              throw new AuthenticationError('Something Went Wrong')
            }
            const token = signToken(user);
            return {token, user};
        }
    }
};

module.exports = resolvers; 