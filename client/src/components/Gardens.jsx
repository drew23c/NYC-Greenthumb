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
    query BOROUGH_QUERY($boro: String){
        locationByBorough(boro: $boro){
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
        this.boro = [" ", "Q", "B", "X", "R"]
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
                                    data.locationByBorough.boro ? (
                                    data.locationByBorough.map(lbb =>(
                                        <FilterBorough launch={lbb} />
                                    )))
                                    :
                                    (<div>
                                        <h2>SELECT A BOROUGH:</h2>
                                        <select>
                                            {this.boro.map(b=><option>{b}</option>)}
                                        </select>
                                    </div>)
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