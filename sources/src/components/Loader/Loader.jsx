import React from 'react'

import './Loader.css'

const Loader = () => {
    return <React.Fragment>
        <div className="loading">
            <img style={{ width: '60px', height: '60px' }} src={require('../../assets/loader.gif')} alt="Loader" />
        </div>
    </React.Fragment>
}

export default Loader