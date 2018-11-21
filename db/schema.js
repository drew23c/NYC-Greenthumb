const graphql = require('graphql');
const axios = require('axios');
const db = require('./index');

const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
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

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addLocations: {
            type: new GraphQLList(LocationsType),
            args: {
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
            },
            resolve(parent, args){
                return axios.get('https://data.cityofnewyork.us/resource/yes4-7zbb.json')
                    .then(res=>{
                        db.any(`INSERT INTO community (propid, bbl, boro, address, garden_name, cross_streets, latitude, longitude, neighborhood, nta, postal_code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
                        [args.propid, args.bbl, args.boro, args.address, args.garden_name, args.cross_streets, args.latitude, args.longitude, args.neighborhoodname, args.nta, args.postalcode])
                    })
                }
            }
        }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})