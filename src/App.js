
import './App.css';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useEffect, useState } from 'react';
import InfoBox from './infoBox';
import Map from './Map';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import Table from './Table';
import { sortData } from './util';
import LineGraph from './LineGraph';
import "leaflet/dist/leaflet.css";
// https://disease.sh/v3/covid-19/countries





function App() {


  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(4);
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    fetch(" https://disease.sh/v3/covid-19/all")
      .then(response => response.json())
      .then((data) => {
        setCountryInfo(data)
      });
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url = countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    // https://disease.sh/v3/covid-19/all
    // https://disease.sh/v3/covid-19/countries/[COUNTRY_CODE]

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);

        const mapObj = countryCode === "worldwide" ? { lat: 34.80746, lng: -40.4796 } : { lat: data.countryInfo.lat, lng: data.countryInfo.long };

        //All of the data from the country response
        setCountryInfo(data);

        //setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapCenter(mapObj);
        setMapZoom(4);

      });
  };
  //EFFECT Runs a piece of code based on a given condition.

  useEffect(() => {
    //async -> send a request , wait for it, and do something with info

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")

        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }

          ));
          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);


        });
    };
    getCountriesData();
  }, []);
  return (
    <div className="app">
      <div className="app__left">

        <div className="app__header">



          <h1>Covid-19 Tracker</h1>
          <FormControl className="app__dropdown">

            <Select

              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {/* loop through each country and show them in menu item */}
              {countries.map(country => (
                <MenuItem value={country.value}>{country.name} </MenuItem>

              ))}

              {/* <MenuItem value="worldwide">Option1</MenuItem>
            <MenuItem value="worldwide">Option2</MenuItem>
            <MenuItem value="worldwide">Option3</MenuItem>
            <MenuItem value="worldwide">Option4</MenuItem>
            <MenuItem value="worldwide">Option5</MenuItem> */}

            </Select>

          </FormControl>
        </div>

        <div className="app__stats">

          <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />

          {/*InfoBoxes  title ="coronaviruscases"*/}
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />

          {/*InfoBoxes title ="corona virus recoveries"*/}
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
          {/*InfoBoxes*/}

        </div>


        {/*Header*/}
        {/*Title+selectinput dropdown*/}




        <Map center={mapCenter}
          zoom={mapZoom}
          countries={mapCountries} />
        {/*Map*/}
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new cases</h3>
          {/*Table*/}
          <LineGraph />
          {/* graph */}
        </CardContent>

      </Card>
    </div>


  );
}

export default App;
