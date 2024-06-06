import React from 'react'
import ProgresBar from './Progressbar'
import TickIcon from './TickIcon'
const ListItem = ({task})=> {
  return (
    <li className='list-item'>
      <div className="info-container">
        <TickIcon/>
        <p>{task.title}</p>
        <ProgresBar/>
      </div>
      <div className="button-container">
        <button className='edit'> EDIT</button>
        <button className='delete'> DELETE</button>
      </div>
    </li>
  )
}

export default ListItem