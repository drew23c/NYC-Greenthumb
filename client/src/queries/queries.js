import gql from 'graphql-tag';

const locationsQuery = gql`
    {
        locations{
            id
            boro
            address
            garden_name
            cross_streets
            latitude
            longitude
            neighborhoodname
            postcode
        }
    }
`
const boroughQuery = gql`
    query LocationQuery($boro: String){
        locationByBorough(boro: $boro){
            id
            boro
            address
            garden_name
            cross_streets
            latitude
            longitude
            neighborhoodname
            postcode
        }
    }
`;

export {locationsQuery, boroughQuery};