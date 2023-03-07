import { Avatar } from '@mui/material'
import React from 'react'
import './SideBarRow.css'

const SideBarRow = ({src, Icon, title}) => {
  return (
    <div className='sideBarRow'>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  )
}

export default SideBarRow
