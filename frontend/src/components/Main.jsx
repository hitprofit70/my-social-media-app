import React from 'react'
import CardUsers from './CardUsers'

const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
            <CardUsers/>
            <CardUsers/>
            <CardUsers/>
            </div>
        </div>
    )
}

export default Main