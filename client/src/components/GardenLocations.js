import React from 'react';
import './styles/gardensLocations.css';

const AllLocations = ({location:{boro, garden_name, address, latitude, longitude, neighborhoodname, postcode, cross_streets}}) =>{
    return(
        <div className="gardens">
            <div className="gardens-locations">
                <a href={`https://www.google.com/maps/place/${address}/@${latitude},${longitude},17z?hl=en&authuser=0`} target="_blank">
                    <h3>{garden_name}</h3>
                    <h4>{boro}</h4>
                    <p>{neighborhoodname}</p>
                    <p>{cross_streets}</p>
                    <p>{address}</p>
                    <p>{postcode}</p>
                </a>
            </div>
        </div>
    )
}
export default AllLocations;