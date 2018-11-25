const graphql = require('graphql');
const db = require('./index');

const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLFloat
} = graphql;

const LocationsType = new GraphQLObjectType({
    name: 'Locations',
    fields: ()=> ({
        propid: {type: GraphQLString},
        boro: {type: GraphQLString},
        bbl: {type: GraphQLString},
        address: {type: GraphQLString},
        garden_name: {type: GraphQLString},
        cross_streets: {type: GraphQLString},
        latitude: {type: GraphQLFloat},
        longitude: {type: GraphQLFloat},
        neighborhoodname: {type: GraphQLString},
        nta: {type: GraphQLString},
        postcode: {type: GraphQLString}
    })
});

const LocationType = new GraphQLObjectType({
    name: 'Location',
    fields: () => ({
        propid: {type: GraphQLString},
        boro:{type: GraphQLString},
        bbl: {type: GraphQLString},
        address: {type: GraphQLString},
        garden_name: {type: GraphQLString},
        cross_streets: {type: GraphQLString},
        latitude: {type: GraphQLFloat},
        longitude: {type: GraphQLFloat},
        neighborhoodname: {type: GraphQLString},
        nta: {type: GraphQLString},
        postcode: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        locations: {
            type: new GraphQLList(LocationsType),
            resolve(parent, args){
                const query = `SELECT * FROM community`;
                return db.any(query)
                    .then(data=> data)
            }
        },
        locationByBorough: {
            type: new GraphQLList(LocationType),
            args: {boro: {type: GraphQLString}},
            resolve(parent, {boro}){
                return db.any('SELECT * FROM community WHERE boro = $1', [boro.toUpperCase()])
                    .then(data=> data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
})