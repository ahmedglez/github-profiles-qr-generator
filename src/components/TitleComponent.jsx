import React from 'react'
import '../styles/TitleComponent.scss'


const TitleComponent = ({text}) => {
  return (
    <div className='title-container'>
        <h1 className='title'>{text}</h1>
    </div>
  )
}

export default TitleComponent