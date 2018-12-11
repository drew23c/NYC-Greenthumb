import React from 'react';
import './styles/gardensLocations.css';

const AllLocations = ({location:{id, boro, garden_name, address, latitude, longitude, neighborhoodname, postcode, cross_streets}}) =>{
    return(
        <div>
            <ul className="gardens">
                <li className="gardens-locations">
                    <a href={`https://www.google.com/maps/place/${address}/@${latitude},${longitude},17z?hl=en&authuser=0`} target="_blank" key={id}>
                    <h3>{garden_name}</h3>
                    <h4>{boro}</h4>
                    <p>{neighborhoodname}</p>
                    <p>{cross_streets}</p>
                    <p>{address}</p>
                    <p>{postcode}</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default AllLocations;