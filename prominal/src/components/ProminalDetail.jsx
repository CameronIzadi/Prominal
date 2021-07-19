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

  return <div>
    <h2>{everything.fields?.name}</h2>
    <h2>{everything.fields?.author}</h2>
    <div class="parent">
    <div class="div1"> 
        <img className="image1" src={everything.fields?.image} alt={everything.fields?.name} />
      </div>
      <div class="div2">
      <img   className="image2" src={everything.fields?.image_2} alt={everything.fields?.name} />
      </div>
      <div class="div3">
        <img   className="image3" src={everything.fields?.image_3} alt={everything.fields?.name} />
      </div>
      <div class="div4"> 
        <img  className="image4" src={everything.fields?.image_4} alt={everything.fields?.name} />
      </div>
      <div class="div5">
      <img  className="image5" src={everything.fields?.image_5} alt={everything.fields?.name} />
      </div>
      </div>
    <img src={everything.fields?.avatar_url} alt={everything.fields?.name} />
    <p>{everything.fields?.description}</p>
    <h2>{everything.fields?.price}</h2>
  </div>
}


