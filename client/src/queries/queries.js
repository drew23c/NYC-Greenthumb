import {gql} from 'apollo-boost';

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
    query ($boro: String){
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
`
export {locationsQuery, boroughQuery};