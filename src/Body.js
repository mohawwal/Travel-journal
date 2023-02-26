import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function Body(props) {
  return (
    <div className='body-a'>
        <div>
            <img src={props.imageUrl} alt="Location-pictures" />
        </div>
        <div className='body-b'>
                <span className='body-c'>
                    <FontAwesomeIcon style={{ color: '#F55A5A'} } className = 'pin-icon' icon={faLocationDot}/>
                    <h4>{props.location}</h4>
                    <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">{props.googleMapUrl}</a>
                </span>
                <h1>{props.tittle}</h1>
                <span className='body-d'>
                    <h4>{props.startDate} - {props.endDate}</h4>
                    <p>
                        {props.discription}
                    </p>
                </span>
        </div>

    </div>
  )
}
