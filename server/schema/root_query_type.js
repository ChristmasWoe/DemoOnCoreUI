const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString } = graphql;
const UserType = require('./user_type');
const HookType = require('./hook_type');
// const LyricType = require('./lyric_type');
// const Lyric = mongoose.model('lyric');
const User = mongoose.model('user');
const Hook = mongoose.model('hook');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        users: {
            type: new GraphQLList(UserType),
            resolve() {
                return User.find({});
            }
        },
        user: {
            type: UserType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parentValue, { id }) {
                return User.findById(id);
            }
        },
        hooks: {
            type: new GraphQLList(HookType),
            resolve() {
                return Hook.find({});
            }
        },
        hook: {
            type: HookType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parentValue, { id }) {
                return Hook.findById(id);
            }
        }
    })
});

module.exports = RootQuery;
