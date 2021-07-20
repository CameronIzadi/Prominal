import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router"
import Loader from "./Loader"
import "../ProminalDetail.css"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE


const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/TABLE%201`


export default function ProminalDetail() {
  const [everything, setEverything] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetchEverything()
    // eslint-disable-next-line
  }, [])

  const fetchEverything = async () => {
    const bigURL = `${URL}/${id}`
    const res = await axios.get(bigURL, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`
      }
    })
    setEverything(res.data)
  }

  if (everything.length === 0) {
    return <Loader />;
  }

  return <div className="bodyContainer">
    <h2 className="name">{everything.fields?.name}</h2>
    <div className="parent">
    <div className="div1"> 
        <img className="image1" src={everything.fields?.image} alt={everything.fields?.name} />
      </div>
      <div className="div2">
      <img   className="image2" src={everything.fields?.image_2} alt={everything.fields?.name} />
      </div>
      <div className="div3">
        <img   className="image3" src={everything.fields?.image_3} alt={everything.fields?.name} />
      </div>
      <div className="div4"> 
        <img  className="image4" src={everything.fields?.image_4} alt={everything.fields?.name} />
      </div>
      <div className="div5">
      <img  className="image5" src={everything.fields?.image_5} alt={everything.fields?.name} />
      </div>
    </div>
    <h2>{everything.fields?.author}</h2>
    <img className="avatar" src={everything.fields?.avatar_url} alt={everything.fields?.name} />
    <h2 className="price">${everything.fields?.price}</h2>
    <p className="description">{everything.fields?.description}</p>
  </div>
}


