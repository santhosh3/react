import React,{useEffect,useState} from 'react'

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
      <input type='text' placeholder='search for a country'/>
      </div>
      <div>
      <select placeholder='Filter by region'>
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
