import React,{useEffect,useState} from 'react'
import './style.css'

function Filter() {
  const [countries, setCountries] = useState([])
  const [data1, setData1] = useState([])
  let url = 'https://restcountries.com/v2/all'
  
  const fetchAPIData = async() => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchAPIData();
  },[])
  
  return (
    <div className='filter-container'>
      <div>
      <input type='text' className='Filter-component' placeholder='search for a country'/>
      </div>
      <div>
      <select className='filter-region' name='select'>
            <option value="Filter by region">Filter by region</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">China</option>
            <option value="South America">South America</option>
            <option value="Africa">Africa</option>
            <option value="Austriala">Austriala</option>
      </select>
      </div>
    </div>
  )
}

export default Filter
