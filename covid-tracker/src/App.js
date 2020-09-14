
import React, {useState, useEffect} from 'react';
import InfoBox from './InfoBox'
import Map from './Map'
import Table from './Table'
import LineGraph from './LineGraph'

import { sortData, prettyPrintStat } from './util'

import './App.css';
import 'leaflet/dist/leaflet.css'

/* Takeaway */
import {
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent
} from '@material-ui/core'

function App() {

  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('worldwide')
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])
  const [mapCenter, setMapCenter] = useState({
    lat: 34.80746,
    lng: -40.4796
  })
  const [mapZoom, setMapZoom] = useState(3)
  const [mapCountries, setMapCountries] = useState([])
  const [casesType, setCasesType] = useState('cases')

  useEffect(() => {

    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data)
    })

  }, [])

  useEffect(() => {

    const getCountriesData = async () => {
      try {
        
        const response = await fetch('https://disease.sh/v3/covid-19/countries')
        const data = await response.json()

        const countriesData = data.map(country => {
          return {
            name: country.country,
            code: country.countryInfo.iso2
          }
        })
        
        const sortedData = sortData(data)
        setTableData(sortedData)
        setCountries(countriesData)
        
        setMapCountries(data)

      } catch (error) {
        console.log(error);
      }      
    }

    getCountriesData()

  }, [])

  const onCountryChange = async (e) => {
    const countryCode = e.target.value    

    const url = countryCode === 'worldwide'
      ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    try {

      const response = await fetch(url)
      const data = await response.json()
      
      setCountry(countryCode)
      setCountryInfo(data)

      setMapCenter({
        lat: data.countryInfo.lat,
        lng: data.countryInfo.long
      })

      setMapZoom(4)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="app">

      <div className="app__left">

        <div className="app__header">

          <h1>Covid 19 Tracker</h1>

          <FormControl className="app__dropdown">
            <Select variant="outlined" value={country} onChange={onCountryChange}>
              
              <MenuItem key="worldwide" value="worldwide">
                Worldwide
              </MenuItem>

              {countries.map(country => (
                <MenuItem key={country.code} value={country.code}>
                  {country.name}
                </MenuItem>
              ))}

            </Select>
          </FormControl>          
        </div>

          <div className="app__stats">
            <InfoBox
              isRed
              active={casesType === 'cases'}
              onClick={e => setCasesType('cases')}
              title="Coronavirus Cases" 
              cases={prettyPrintStat(countryInfo.todayCases)} 
              total={prettyPrintStat(countryInfo.cases)}              
            />

            <InfoBox 
              active={casesType === 'recovered'}
              onClick={e => setCasesType('recovered')}
              title="Recovered" 
              cases={prettyPrintStat(countryInfo.todayRecovered)} 
              total={prettyPrintStat(countryInfo.recovered)}              
            />

            <InfoBox 
              isRed
              active={casesType === 'deaths'}
              onClick={e => setCasesType('deaths')}
              title="Deaths" 
              cases={prettyPrintStat(countryInfo.todayDeaths)} 
              total={prettyPrintStat(countryInfo.deaths)}               
            />

          </div>           

          <Map 
            casesType={casesType}
            countries={mapCountries}
            center={mapCenter}
            zoom={mapZoom}
          />

      </div>      
      
      <Card className="app__right">
          <CardContent>

            <h3>Live Cases by Country</h3>
            <Table countries={tableData} />

            <h3 className="app__right__graph__title">Worldwide new {casesType}</h3>
            <LineGraph className="app__graph" caseType={casesType}/>
            
          </CardContent>
      </Card>

    </div>
  );
}

export default App;
