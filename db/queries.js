let db = require('./index');
let axios = require('axios');

const getAPI = (url) =>{
    axios.get(url)
    .then(res =>{
        let listOfData = res.data
        for(let i = 0; i < 100; i++){
            let item = listOfData[i];
            let bbl = item.bbl;
            let propid = item.propid;
            let boro = item.boro;
            let address = item.address;
            let gardenName = item.garden_name;
            let crossStreets = item.cross_streets;
            let latitude = item.latitude;
            let longitude = item.longitude;
            let neighborhood = item.neighborhoodname;
            let nta = item.nta;
            let postalCode = item.postcode;

            db.any('INSERT INTO community (propid, bbl, boro, address, garden_name, cross_streets, latitude, longitude, neighborhoodname, nta, postcode) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', 
            [propid, bbl, boro, address, gardenName, crossStreets, latitude, longitude, neighborhood, nta, postalCode])
            .then(()=>{
            })
            .catch(err=>{
                console.log(err)
            })
        }
    })
    .catch(err =>{
        res.status(500).json({
            status: 'failed',
            message: err
        })
    })
}

getAPI('https://data.cityofnewyork.us/resource/yes4-7zbb.json');