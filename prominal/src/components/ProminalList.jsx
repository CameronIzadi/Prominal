import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Loader from "./Loader"

// import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import "../ProminalList.css"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/TABLE%201`




export default function ProminalList() {
  const [everything, setEverything] = useState([])
  



  useEffect(() => {


    fetchData()

  }, [])

  const fetchData = async () => {
    const res = await axios.get(URL,
      {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` }
      });
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
            
            {/* <Card className="classesRoot"> */}
              <div className="classesRoot">

            {/* <CardMedia> */}
               <Link to={`/${everythin.id}`} key={everythin.id}>
                  <img className="classesCover"   src={everythin.fields.image}  alt=""/>
                  </Link>
                {/* </CardMedia> */}

              {/* <CardContent className="classesContent"> */}
              <div className="classesContent">
                
                <Link to={`/${everythin.id}`} key={everythin.id}>
                      <h2 className="name">{everythin.fields.name}</h2>
                </Link>
                    
                <h5 className="author">{everythin.fields.author}</h5>
                
                <h4 className="description">{everythin.fields.description}</h4>
                
                <h2 className="price">${everythin.fields.price}</h2>
                </div>
                {/* </CardContent> */}
                
              
            {/* </Card> */}
            </div>
          
          </div>
        )
      }
      )}</div>
  )
}


  

