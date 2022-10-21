
import React, {useState,useEffect} from 'react'
import Navbar from './Navbar';
import Flag from './Flag';
import './style.css'

function HomePage() {
    const [countries, setCountries] = useState([])
    const [FilterCountries, setFilterCountries] = useState([]);
    const [countriesList, setCountriesList] = useState([]);

    let url = 'https://restcountries.com/v2/all'
    
    const fetchAPIData = async() => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
        setFilterCountries(data);
        let obj = {}
        data.forEach((country) => {
            if(!obj[country.region]){
                obj[country.region] = [country.region]
              }
         });
         setCountriesList(Object.keys(obj))
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
      fetchAPIData();
    },[])

    const handleChange = e => {
        let {value} = e.target
        const newCountries = countries.filter((country) => {
            let countryName = country.name.toLowerCase()
            if(countryName.includes(value.toLowerCase())){
                return country
            }
        })
        setFilterCountries([...newCountries])
    }

    const selectChange = e => {
        let {value} = e.target
        const newCountries = countries.filter((country) => {
            let regionName = country.region
            if(regionName.includes(value)){
                return country
            }
        })
        setFilterCountries([...newCountries])
    }
  return (
    <div>
        <Navbar />
        <div className='filter-container'>
        <div className='Filter-left'>
        <input type= 'text' className='Filter-component' placeholder = 'search Countries' onChange={(e) => handleChange(e)} />
        </div>
        <div>
        <select className='filter-region' onChange={(e) => selectChange(e)}>
          <option>Filter By Region</option>
          {countriesList.map((name) => {
            return(
             <option key={name.numericCode} value={name} >{name}</option>
            )
          })}
        </select>
        </div>
        </div>
        <div className='main-container'>
        {
          FilterCountries.map((country) => {
          return <div key={country.numericCode}>
          <Flag props={country}/>
          </div>
         })
        }
        </div>
    </div>
  )
}

export default HomePage