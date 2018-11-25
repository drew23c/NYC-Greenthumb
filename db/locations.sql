DROP DATABASE IF EXISTS locations;
CREATE DATABASE locations;

\c locations;

CREATE TABLE community(
    id SERIAL PRIMARY KEY,
    propid VARCHAR,
    bbl VARCHAR,
    boro TEXT,
    address VARCHAR,
    garden_name VARCHAR,
    cross_streets VARCHAR,
    latitude VARCHAR,
    longitude VARCHAR,
    neighborhoodname VARCHAR,
    nta VARCHAR,
    postalcode VARCHAR
);