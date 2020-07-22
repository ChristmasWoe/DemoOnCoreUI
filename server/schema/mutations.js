
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } = graphql;
const mongoose = require('mongoose');
const User = mongoose.model('user');
const Hook = mongoose.model('hook');
const HookType = require('./hook_type')
// const Lyric = mongoose.model('lyric');
const UserType = require('./user_type');
// const LyricType = require('./lyric_type');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, { name, password, email }) {
                return (new User({ name, password, email })).save()
            }
        },
        addHook: {
            type: HookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                price: { type: new GraphQLNonNull(GraphQLString) },
                hid: { type: new GraphQLNonNull(GraphQLString) },
                material: { type: GraphQLString },
                description: { type: GraphQLString }
            },
            resolve(parentValue, { name, price, hid, material, description }) {
                return (new Hook({ name, price, hid, material, description })).save()
            }
        },
        editHook: {
            type: HookType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: GraphQLString },
                price: { type: GraphQLString },
                hid: { type: GraphQLString },
                material: { type: GraphQLString },
                description: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                return Hook.editHook(args.id, args)
            }
        }
    }
});

module.exports = mutation;
