import React, {Component, Fragment} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import GardenLocation from './GardenLocations';

const LAUNCH_LOCATIONS = gql `
    query LOCATIONS{
        locations{
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

class Gardens extends Component{
    render(){
        return(
            <Fragment>
                <Query query={LAUNCH_LOCATIONS}>
                    {
                        ({loading, error, data}) => {
                            if(loading) return <h4>Loading...</h4>
                            if(error) return console.log(error);
                            return <Fragment>
                                {
                                    data.locations.map(location=>(
                                        <GardenLocation location={location} />
                                    ))
                                }
                            </Fragment>
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}
export default Gardens;