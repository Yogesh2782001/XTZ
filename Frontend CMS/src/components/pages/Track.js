import React from 'react'
import "./Track.css"

function Track() {
  return (
    <>
    <div className='track-container'>
    <h2 id='track-header'>ENTER YOUR TRACKING ID</h2>
      <div className='track'>
        <input type="text" className='inp-track' placeholder='Track ID' required />
      </div>
      <div className='track'>
        <input type="submit" value="TRACK" className='track-btn'/>
      </div>
      </div>
    </>
  )
}

export default Track;