const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models"); 
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // Resolver to fetch user data if authenticated
    me: async (parent, args, context) => {
      if (context.user) {
        // Fetch user data excluding sensitive fields
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      // Throw error if user is not authenticated
      throw new AuthenticationError("Not logged in!");
    },
  },

  Mutation: {
    // Resolver to add a new user
    addUser: async (parent, { username, email, password }) => {
      // Create a new user with provided credentials
      const user = await User.create({ username, email, password });
      // Generate JWT token for the new user
      const token = signToken(user);
      // Return token and user data
      return { token, user };
    },
    // Resolver to handle user login
    login: async (parent, { email, password }) => {
      // Find user by email
      const user = await User.findOne({ email });

      // If user not found, throw error
      if (!user) {
        throw new AuthenticationError(
          "User not found. Do you have an account?"
        );
      }

      // Verify password correctness
      const correctPw = await user.isCorrectPassword(password);

      // If password is incorrect, throw error
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials!");
      }

      // Generate JWT token for the user
      const token = signToken(user);

      // Return token and user data
      return { token, user };
    },
    // Resolver to save a book to user's saved books list
    saveBook: async (parent, { book }, context) => {
      // Ensure user is authenticated
      if (context.user) {
        // Update user's document to add new book to savedBooks array
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: book } },
          { new: true }
        );
        return updatedUser;
      }
      // Throw error if user is not authenticated
      throw new AuthenticationError("You need to be logged in!");
    },
    // Resolver to remove a book from user's saved books list
    removeBook: async (parent, { bookId }, context) => {
      // Ensure user is authenticated
      if (context.user) {
        // Update user's document to remove book from savedBooks array
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return updatedUser;
      }
      // Throw error if user is not authenticated
      throw new AuthenticationError("Login required!");
    },
  },
};

module.exports = resolvers;
