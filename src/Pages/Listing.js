import React from 'react'
import { Link } from 'react-router-dom';

const Listing = () => {
    return (
        <div>
            Test TVOD Product 1 <br />
            <Link to='/payment/tvod'>Buy now</Link>
            <hr />
            Test SVOD Product 1 <br />
            <Link to='/payment/svod'>Buy now</Link>
            <hr />

        </div>
    )
}

export default Listing;