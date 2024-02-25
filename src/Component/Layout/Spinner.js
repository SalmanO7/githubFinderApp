import React from 'react'
import spinner from './spinner.gif'
function Spinner() {
    return (
        <>
            <img src={spinner} alt="Loader" style={{ display: 'block', width: '200px', margin: 'auto' }} />
        </>
    )
}
Spinner.propTypes = {};

export default Spinner
