import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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
    console.log(res.data.records)
    setEverything(res.data.records)
  };

  return (
    <div>
      {everything.map((everythin) => {
        return (
          <div>
            <Link to={`/${everythin.id}`} key={everythin.id}>
              <h3>{everythin.fields.name}</h3>
              <img src={everythin.fields.image} />
            </Link>
            <h3>{everythin.fields.author}</h3>
            <h3>{everythin.fields.description}</h3>
            <h3>${everythin.fields.price}</h3>
          </div>
        )
      }
      )}</div>
  )
}




