import React from 'react'
import LogoName from './job.jpg'
import './logo.css'
class Logo extends React.Component {
    render () {
        return (
            <div className={'logo'}>
                <img src={LogoName} alt=""/>
            </div>
        )
    }
}

export default Logo
