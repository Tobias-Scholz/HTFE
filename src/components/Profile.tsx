import { Avatar, TableCell, TableRow, Tooltip } from '@material-ui/core'
import React from 'react'
import { PlayerProfile } from '../App'
import './Profile.css'
import dayjs from 'dayjs'

export const Profile = ({ profile }: { profile: PlayerProfile }) => {
  return (
    <TableRow key={profile.steamId}>
      <TableCell align="left">
        <Avatar src={profile.avatar} className="avatar" variant="rounded"></Avatar>
      </TableCell>
      <TableCell align="left">
        <a href={profile.profileUrl} target="blank">
          {profile.userName}
        </a>
      </TableCell>
      <TableCell align="left">{dayjs(profile.encountered).format('DD.MM.YYYY HH:mm:ss')}</TableCell>
      <TableCell align="left">{profile.comment}</TableCell>
      <TableCell align="left">
        <a href={profile.matchUrl} target="blank">
          {profile.matchUrl}
        </a>
      </TableCell>
      <TableCell align="left">
        {profile.vac || profile.overwatch ? (
          <Tooltip title={profile.daysSinceLastBan + ' days since last ban'}>
            <span className="ban">{profile.vac ? 'VAC' : 'Overwatch'}</span>
          </Tooltip>
        ) : (
          ''
        )}
      </TableCell>
    </TableRow>
  )
}
