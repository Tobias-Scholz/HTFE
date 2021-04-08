import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { green, purple } from '@material-ui/core/colors'
import LinearProgress from '@material-ui/core/LinearProgress'
import React, { useEffect, useState } from 'react'
import './App.css'
import { ProfileList } from './components/ProfileList'

export interface PlayerProfile {
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
  encountered: Date
  daysSinceLastBan: number
}

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
})

function App() {
  const [data, setData] = useState<PlayerProfile[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://dazzling-minsky-b2c2da.netlify.app/.netlify/functions/api/profiles', {
      headers: { 'Cache-Control': 'no-store, no-cache' },
    })
      .then((r) => r.json())
      .then((r) => {
        setData(r)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="root">
      <ThemeProvider theme={theme}>
        {loading && <LinearProgress />}
        <div className="App">
          <ProfileList list={data}></ProfileList>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
