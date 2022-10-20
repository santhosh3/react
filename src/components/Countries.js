import React,{useState,useEffect} from 'react'
import Img from '../ReusableComponent'
import './style.css'

function Countries() {
  const [countries, setCountries] = useState([])
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
    <div className='main-container'>
      {
        countries.map((country) => {
          const {numericCode, name, population,region,capital,flag} = country
          return <article key={numericCode}>
            <div className='sub-container'>
              <div className='Image'>
              <Img src={flag}/>
              </div>
              <div className='content'>
              <h3>{name}</h3>
              <h4 className='items'>Population: <span>{population}</span></h4>
              <h4 className='items'>Region: <span>{region}</span></h4>
              <h4 className='items'>Capital: <span>{capital}</span></h4>
              </div>
            </div>
          </article>
        })
      }
    </div>
  )
}

export default Countries
