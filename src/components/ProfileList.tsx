import { PlayerProfile } from '../App'
import { Profile } from './Profile'
import { v4 } from 'uuid'
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@material-ui/core'
import { ToggleButton } from '@material-ui/lab'
import React, { useState } from 'react'

export const ProfileList = ({ list, headline }: { list: PlayerProfile[]; headline: string }) => {
  const [toggleVac, setToggleVac] = useState(false)

  const countBanned = list.filter((e) => e.vac || e.overwatch).length

  if (toggleVac) {
    list = list.filter((e) => e.vac || e.overwatch)
  }

  return (
    <div style={{ padding: '10px' }}>
      <Typography variant="h4" style={{ marginBottom: 20 }}>
        {headline}
      </Typography>
      {countBanned > 0 && (
        <FormControlLabel
          style={{ float: 'right', marginRight: 0 }}
          control={
            <Checkbox checked={toggleVac} onChange={() => setToggleVac(!toggleVac)} name="checkedB" color="primary" />
          }
          label={'Zeige ' + countBanned + ' gebannt(e) Profile an.'}
        />
      )}
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: '15px' }}></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Datum</TableCell>
              <TableCell>Kommentar</TableCell>
              <TableCell>Match URL</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list
              .sort((a, b) => {
                return new Date(b.encountered).getTime() - new Date(a.encountered).getTime()
              })
              .map((p) => (
                <Profile key={v4()} profile={p}></Profile>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
