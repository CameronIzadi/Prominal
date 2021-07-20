import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Loader from "./Loader"


import "../ProminalList.css"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/TABLE%201`




export default function ProminalList() {
  const [everything, setEverything] = useState([])

  // const searchBar = document.getElementById('searchBar');
  // let allData = []
  
  // if (searchBar) {
  //   searchBar.addEventListener('keyup', (e) => {
  //     console.log(e.target.value)
  //     const searchString = e.target.value
  //     const filteredEverything = allData.filter(thing => {
  //       return thing.fields.name.includes(searchString)
  //     })
  //     console.log(filteredEverything)
  //   })
  // }

  useEffect(() => {


    fetchData()

  }, [])

  const fetchData = async () => {
    const res = await axios.get(URL,
      {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` }
      });
    
    // allData = res.data.records
    setEverything(res.data.records)
  };

  if (everything.length === 0) {
    return <Loader />;
  }

  return (
    <div>
      {everything.map((everythin, index) => {
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


  

