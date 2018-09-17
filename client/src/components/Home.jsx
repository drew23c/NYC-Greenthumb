import React from 'react';
import gardenIMG from './images/bloom-blossom-flora-130154.jpg';
import './styles/home.css';
import Intro from './Intro';

const Home = () =>{
    return(
        <div className="homepage">
            <h1>NYC Community Gardens</h1>
            <img src={gardenIMG} alt="gardens image" />
            <Intro/>
        </div>
    )
}
export default Home;