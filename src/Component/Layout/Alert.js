import React from 'react'


const Alert = (props) => {
  return(
    
  props.onAlert !== null && (
    <div>
      <i className='fas fa-info-circle'>
        {props.onAlert.msg}
      </i>
    </div>

  )
  )
}

export default Alert
