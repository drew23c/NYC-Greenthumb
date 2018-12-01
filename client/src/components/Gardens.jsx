import React, {Component, Fragment} from 'react';
import {Query} from 'react-apollo';
import {locationsQuery} from '../queries/queries';
import GardenLocations from './GardenLocations';

class Gardens extends Component{
    constructor(){
        super()
        this.state={
        }
    } 
    render(){
        return(
            <Fragment>
                <Query query={locationsQuery}>
                    {
                        ({loading, error, data}) => {
                            if(loading) return <h2>Loading...</h2>
                            if(error) return console.log(error)
                            console.log(data)
                            return(
                                <Fragment>
                                    {
                                        data.locations.map(l=>(
                                            <GardenLocations location={l} />
                                        ))
                                    }
                                </Fragment>
                            )
                        }
                    }
                </Query>
            </Fragment>
        )    
    }   
}
export default Gardens;