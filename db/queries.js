let db = require('./index');
let axios = require('axios');

const getAPI = (url) =>{
    axios.get(url)
    .then(res =>{
        let listOfData = res.data
        for(let i = 0; i < 100; i++){
            let item = listOfData[i];
            let bbl = item.bbl;
            let boro = item.boro;
            let address = item.address;
            let gardenName = item.garden_name;
            let crossStreets = item.cross_streets;
            let latitude = item.latitude;
            let longitude = item.longitude;
            let neighborhood = item.neighborhoodname;
            let nta = item.nta;
            let postalCode = item.postcode;

            db.any('INSERT INTO community (bbl, boro, address, garden_name, cross_streets, latitude, longitude, neighborhood, nta, postal_code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', 
            [bbl, boro, address, gardenName, crossStreets, latitude, longitude, neighborhood, nta, postalCode])
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

getAPI('https://data.cityofnewyork.us/resource/yes4-7zbb.json')

allLocations = (req, res, next) =>{
    db.any('SELECT * FROM community')
    .then(data =>{
        res.status(200).json({
            status:'success',
            data:data,
            message:'All locations loaded'
        })
    })
    .catch(err =>{
        res.status(500).json({
            status:'failed',
            message:err
        })
    })
}

filterByBorough = (req, res, next) =>{
    let boro = req.params.boro
    db.any('SELECT * FROM community WHERE boro = $1', [boro.toUpperCase()])
    .then(data =>{
        res.status(200).json({
            status:'success',
            data:data,
            message: boro + ' is selected.'
        })
    })
    .catch(err=>{
        res.status(500).json({
            status:'failed',
            message:err
        })
    })
}

searchByAddress = (req, res, next) =>{
    let address = req.params.address
    db.any('SELECT * FROM community WHERE address = $1', address)
    .then(data =>{
        res.status(200).json({
            status:'success',
            data:data,
            message:'found it!'
        })
    })
    .catch(err =>{
        res.status(500).json({
            status:'failed',
            message:err
        })
    })
}

module.exports={
    allLocations,
    filterByBorough,
    searchByAddress
}