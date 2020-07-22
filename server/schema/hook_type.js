// const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, } = graphql;
// const LyricType = require('./lyric_type');
// const User = mongoose.model('user');

const HookType = new GraphQLObjectType({
    name: 'HookType',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        hid: { type: GraphQLString },
        price: { type: GraphQLString },
        material: { type: GraphQLString },
        description: { type: GraphQLString },
    })
});

module.exports = HookType;
