import React from 'react';
import './styles/gardensLocations.css';

const AllLocations = ({locations}) =>{
    return(
        <div className="gardens">
            {locations.map(l=><div className="gardens-locations">
                <a href={`https://www.google.com/maps/place/${l.address}/@${l.latitude},${l.longitude},17z?hl=en&authuser=0`} target="_blank" key={l.id}>
                <h3>{l.garden_name}</h3>
                <h4>{l.boro}</h4>
                <p>{l.neighborhoodname}</p>
                <p>{l.cross_streets}</p>
                <p>{l.address}</p>
                <p>{l.postcode}</p>
                </a>
            </div>)}
        </div>
    )
}
export default AllLocations;