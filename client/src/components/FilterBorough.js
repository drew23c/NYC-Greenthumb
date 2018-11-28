import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {boroughQuery} from '../queries/queries';

class FilterBorough extends Component{
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }
    handleClick = (data) =>{
        this.setState({

        })
    }
    render(){
        return(
            <div>
                <h1>Borough</h1>
            </div>
        )
    }
}
export default graphql(boroughQuery)(FilterBorough);