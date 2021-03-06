// loader that will be displayed while the app is waiting for the products to be displayed
import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <Spinner animation='border' role='status' style={{ width: '100px', height: '100px', margin: 'auto', display: 'block' }}>
            
            <span className='sr-only'>Loading....</span>
        </Spinner>
    )
}

export default Loader
