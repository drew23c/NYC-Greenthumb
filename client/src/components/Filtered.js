import React from 'react';

const Filtered = ({id, boro, garden_name, address, latitude, longitude, cross_streets, neighborhoodname, postcode}) =>{
    return(
        <div className="gardens-locations" key={id}>
            <a href={`https://www.google.com/maps/place/${address}/@${latitude},${longitude},17z?hl=en&authuser=0`} target="_blank">
                <h3>{garden_name}</h3>
                <h4>{boro}</h4>
                <p>{neighborhoodname}</p>
                <p>{cross_streets}</p>
                <p>{address}</p>
                <p>{postcode}</p>
            </a>
        </div>
    )
}
export default Filtered;