// const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
// const LyricType = require('./lyric_type');
// const User = mongoose.model('user');

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
    })
});

module.exports = UserType;
