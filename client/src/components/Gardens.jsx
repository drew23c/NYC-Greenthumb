import React, {Component, Fragment} from 'react';
import {Query} from 'react-apollo';
import {locationsQuery} from '../queries/queries';
import GardenLocations from './GardenLocations';
import FilterResult from './FilterResult';

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
                            return(
                                <Fragment>
                                    <div className="filter">
                                        <FilterResult/>
                                    </div>
                                    {                                       
                                            <GardenLocations locations={data.locations} />
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