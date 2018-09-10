import React from 'react';

const AllLocations = ({locations, boro, filter, change, boroResult}) =>{
    return(
        <div className="gardens">
            <div className="filter-boro">
                <select name="boro" onChange={change}>
                    {boro.map(b =><option value={b}>{b}</option>)}
                </select>
                <button onClick={filter}>Search</button>
                <ul>
                    {boroResult.map(br =><a href={`https://www.google.com/maps/place/${br.address}/@${br.latitude},${br.longitude},17z?hl=en&authuser=0`} target="_blank"><li key={br.id}>{br.garden_name}<br/>
                    {br.address}<br/>
                    {br.boro}<br/>
                    {br.neighborhood}<br/>
                    {br.cross_streets}<br/>
                    {br.postal_code}</li></a>)}
                </ul>
            </div>
            <div className="boroughs">
                <ul>
                    {locations.map(location =><a href={`https://www.google.com/maps/place/${location.address}/@${location.latitude},${location.longitude},17z?hl=en&authuser=0`} target="_blank"><li key={location.id}>{location.garden_name}<br/>
                    {location.address}<br/>
                    {location.boro}<br/>
                    {location.neighborhood}<br/>
                    {location.cross_streets}<br/>
                    {location.postal_code}</li></a>)}
                </ul>
            </div>
        </div>
    )
}
export default AllLocations;