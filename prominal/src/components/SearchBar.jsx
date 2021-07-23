import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/TABLE%201`



// const searchBar = document.getElementById('searchBar');
// let allData = []


export default function SearchBar() {


 useEffect(() => {

  fetchData()

  // searchBar.addEventListener('keyup', (e) => {
  //   console.log(e.target.value)
  //   const searchString = e.target.value
  //   const filteredEverything = allData.filter(thing => {
  //     return thing.fields.name.includes(searchString)
  //   })
  //   console.log(filteredEverything)
  // })

 }, [])
  
const [filteredData, setFilteredData] = useState(alldata)
const [alldata, setAllData] = useState("")
  
const handleSearch = (event) => {
  let value = event.target.value
  let result = []
  result = alldata.filter((data) => {
    return data.fields.name.search(value) !== -1;
  })
  setFilteredData(result)
}



const fetchData = async () => {
  const res = await axios.get(URL,
    {
      headers: { Authorization: `Bearer ${AIRTABLE_KEY}` }
    });
  
  // allData = res.data.records
  // setEverything(res.data.records)
  // setFilteredData(res.data.records)
  setAllData(res.data.records)
};


return (
  <div>
    <div id="searchWrapper">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="search for something"
        onChange={(event => handleSearch)} />
     </div>
    
    {filteredData.map((everythin, index) => {
      return (
        <div key={index}>
          
            <div className="classesRoot">

             <Link to={`/${everythin.id}`} key={everythin.id}>
                <img className="classesCover"   src={everythin.fields.image}  alt=""/>
                </Link>

            <div className="classesContent">
              
              <Link to={`/${everythin.id}`} key={everythin.id}>
                    <h2 className="name">{everythin.fields.name}</h2>
              </Link>
                  
              <h5 className="author">{everythin.fields.author}</h5>
              
              <h4 className="description">{everythin.fields.description}</h4>
              
              <h2 className="price">${everythin.fields.price}</h2>
              </div>
              
            
          </div>
        
        </div>
      )
    }
    )}</div>
)
  }