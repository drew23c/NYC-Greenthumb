import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {locationsQuery} from '../queries/queries';
import GardenLocations from './GardenLocations';

class Gardens extends Component{
    displayGardens = () =>{
        let data = this.props.data
        if(data.loading){
            return <h2>Loading...</h2>
        }
        else{
            return <div>
                {
                    data.locations.map(l=>(
                        <GardenLocations location={l} />
                    ))
                }
            </div>
        }
    }
    render(){
        console.log(this.props.data.locations)
        return(
            <div>
                <h1>Gardens</h1>
                {this.displayGardens()}
            </div>
        )
    }
}
export default graphql(locationsQuery)(Gardens);