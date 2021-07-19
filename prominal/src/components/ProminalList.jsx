import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Loader from "./Loader"

// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
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
            
            <Card className="classesRoot">

            <CardMedia>
               <Link to={`/${everythin.id}`} key={everythin.id}>
                  <img className="classesCover"   src={everythin.fields.image}  alt=""/>
                  </Link>
                </CardMedia>

                <CardContent className="classesContent">
                  {/* <Typography component="h5" variant="h5"> */}
                    <Link to={`/${everythin.id}`} key={everythin.id}>
                      <h3>{everythin.fields.name}</h3>
                    </Link>
                  {/* </Typography> */}
                  {/* <Typography variant="subtitle1" color="textSecondary"> */}
                    
                    <h3>{everythin.fields.author}</h3>
                  {/* </Typography> */}
                  {/* <Typography variant="subtitle1" color="textSecondary"> */}
                    <h3>{everythin.fields.description}</h3>
                  {/* </Typography> */}
                  {/* <Typography variant="subtitle1" color="textSecondary"> */}
                    <h3>${everythin.fields.price}</h3>
                  {/* </Typography> */}
                </CardContent>
                
              
            </Card>
          
          </div>
        )
      }
      )}</div>
  )
}


  

