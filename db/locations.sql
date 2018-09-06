DROP DATABASE IF EXISTS locations;
CREATE DATABASE locations;

\c locations;

CREATE TABLE community(
    id SERIAL PRIMARY KEY,
    bbl VARCHAR,
    boro TEXT,
    address VARCHAR,
    garden_name VARCHAR,
    cross_streets VARCHAR,
    latitude VARCHAR,
    longitude VARCHAR,
    neighborhood VARCHAR,
    nta VARCHAR,
    postal_code VARCHAR
);