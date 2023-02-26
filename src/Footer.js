import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'



export default function Footer() {
  return (
    <div className='footer'>
      <FontAwesomeIcon icon={faEarthAmericas} style={{ color: 'white' }} className='Globe-icon' />
      <p>my travel journal.</p>
    </div>
  )
}
