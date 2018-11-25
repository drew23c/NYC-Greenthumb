import React, {Component, Fragment} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import GardenLocation from './GardenLocations';
import FilterBorough from './FilterBorough';

const LAUNCH_LOCATIONS = gql `
    query LOCATIONS_QUERY{
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

const LOCATION_BY_BOROUGH = gql `
    query BOROUGH_QUERY{
        locationByBorough(boro: "Q"){
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
    constructor(){
        super()
        this.borough = [" ", "Q", "B", "X", "R"]
    }
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
                <Query query={LOCATION_BY_BOROUGH}>
                    {
                        ({loading, error, data}) =>{
                            if(loading) return <h4>filtering...</h4>
                            if(error) return console.log(error)

                            return <Fragment>
                                {
                                    data.locationByBorough.map(f =>(
                                        <FilterBorough filter={f} />
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