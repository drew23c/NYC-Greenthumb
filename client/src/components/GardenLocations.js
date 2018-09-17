import React from 'react';
import './styles/gardensLocations.css';

const AllLocations = ({locations, boro, filter, change, boroResult, display}) =>{
    return(
        <div className="gardens">
            <div className="select-filter">
                <select name="boro" onChange={change}>
                    {boro.map(b =><option value={b}>{b}</option>)}
                </select>
                <button onClick={filter}>Search</button>
            </div>
            <div className="filter-boro">
                    {boroResult.map(br =><a href={`https://www.google.com/maps/place/${br.address}/@${br.latitude},${br.longitude},17z?hl=en&authuser=0`} target="_blank"><div className="gardens-filtered" key={br.id}>{br.garden_name}<br/>
                    {br.address}<br/>
                    {br.boro}<br/>
                    {br.neighborhood}<br/>
                    {br.cross_streets}<br/>
                    {br.postal_code}</div></a>)}
            </div>
            <div className="boroughs">
                    {locations.map(location =><a href={`https://www.google.com/maps/place/${location.address}/@${location.latitude},${location.longitude},17z?hl=en&authuser=0`} target="_blank"><div className="gardens-locations" key={location.id}>{location.garden_name}<br/>
                    {location.address}<br/>
                    {location.boro}<br/>
                    {location.neighborhood}<br/>
                    {location.cross_streets}<br/>
                    {location.postal_code}</div></a>)}
            </div>
        </div>
    )
}
export default AllLocations;