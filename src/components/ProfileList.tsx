import { PlayerProfile } from '../App'
import { Profile } from './Profile'
import { v4 } from 'uuid'
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { ToggleButton } from '@material-ui/lab'
import React from 'react'

export const ProfileList = ({ list }: { list: PlayerProfile[] }) => {
  return (
    <div>
      <ToggleButton value=""></ToggleButton>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: '15px' }}></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
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
