import React, { useEffect, useState } from 'react'
import './App.css'

export interface Profile {
  _id: string
  steamId: string
  profileUrl: string
  matchUrl: string
  userName: string
  avatar: string
  lastBanCheck: Date
  vac: boolean
  overwatch: boolean
  type: 'obv' | 'maybe'
  createdAt: Date
  updatedAt: Date
}

function App() {
  const [data, setData] = useState<Profile[]>([])

  useEffect(() => {
    fetch('https://dazzling-minsky-b2c2da.netlify.app/.netlify/functions/api/profiles')
      .then((r) => r.json())
      .then((r) => console.log(r))
      .catch((error) => console.log(error))
  }, [])

  return <div className="App"></div>
}

export default App
