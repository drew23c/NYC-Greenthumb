import React from 'react';
import gardenIMG from './images/bloom-blossom-flora-130154.jpg';
import './styles/home.css';

const Home = () =>{
    return(
        <div className="homepage">
            <h1>NYC Greenery</h1>
            <img src={gardenIMG} alt="gardens image" />
        </div>
    )
}
export default Home;