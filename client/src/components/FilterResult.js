import React, {Component, Fragment} from 'react';
import {Query} from 'react-apollo';
import {boroughQuery} from '../queries/queries';
import './styles/filterResults.css';

export class FilterResult extends Component{
    constructor(){
        super()
        this.boro = ["", "B", "M", "Q", "R", "X"]
        this.state = {}
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        let boro = this.state.boro
        return(
            <Fragment>
                <Query query={boroughQuery} variables={{boro}}>
                {
                    ({loading, error, data}) => {
                        if(loading) return <h2>Filtering...</h2>
                        if(error) return console.log(error)
                        console.log(data)
                        return(
                            <Fragment>
                                <h2>Filter by borough</h2>
                                <select name="boro" onChange={this.handleChange}>
                                    {this.boro.map(b=><option value={b}>{b}</option>)}
                                </select>
                                {
                                    data.locationByBorough.map(lbb=>
                                        <div className="filter">
                                            <div className="filtered-boro">
                                                <a href={`https://www.google.com/maps/place/${lbb.address}/@${lbb.latitude},${lbb.longitude},17z?hl=en&authuser=0`} target="_blank" key={lbb.id}>
                                                <h3>{lbb.garden_name}</h3>
                                                <h4>{lbb.boro}</h4>
                                                <p>{lbb.neighborhoodname}</p>
                                                <p>{lbb.cross_streets}</p>
                                                <p>{lbb.address}</p>
                                                <p>{lbb.postcode}</p>
                                                </a>
                                            </div>
                                        </div>
                                    )
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
export default FilterResult;