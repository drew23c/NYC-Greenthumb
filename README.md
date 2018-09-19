# NYC-Greenthumb
Find your favorite Community Garden in NYC.<br/>
View a list of Community Gardens in NYC.<br/>
Filter by boro to find a garden near you.<br/>
Enjoy the best green experience NYC to offer!

![NYC Community Garden Home Page](/screenshots/home.png)

## Feature:
<ul>
  <li>Filter gardens by boro</li>
</ul>

Gardens:
![Gardens Page](/screenshots/gardens.png)

## Technologies used:

* React JS
* Axios
* Express
* PostgreSQL
![NYC Greenthumb Community Gardend API](https://data.cityofnewyork.us/Environment/NYC-Greenthumb-Community-Gardens/ajxm-kzmj)

## Installation

1. Clone or download this repository.
2. To run the server:
    * Open a new terminal.
    * `npm install`
    * `nodemon` or `npm start`   
3. To run the database with PostgreSQL (on Linux):
    * Open a new terminal.
    * `cd db`
    * `sudo service postgresql start`
    * `psql -f locations.sql`
4. To run the front end:
    * Open a terminal.
    * `cd client/src`
    * `npm install` 
    * `npm start`
