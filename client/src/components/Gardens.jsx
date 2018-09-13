import React, {Component} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import AllLocations from './GardenLocations';

class Gardens extends Component{
    constructor(){
        super()
        this.boro=['', 'B','M','Q','R','X'],
        this.state = {
            locations:[],
            filtered:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3100/all')
        .then(res=>{
            this.setState({
                locations:res.data.data
            })
        })
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    filterBoro = () =>{
        axios.get('http://localhost:3100/boro/' + this.state.boro)
        .then((res)=>{
            this.setState({
                filtered: res.data.data
            })
        })
    }
    renderGardenLocations = () =>{
        let {locations, filtered} = this.state;
        return(
            <AllLocations
                locations = {locations}
                boro = {this.boro}
                filter = {this.filterBoro}
                change = {this.handleChange}
                boroResult = {filtered}
            />
        )
    }
    render(){
        return(
            <div>
                <h1>Gardens in NYC</h1>
                    <Route exact path = "/gardens" render = {this.renderGardenLocations} />
            </div>
        )
    }
}
export default Gardens;