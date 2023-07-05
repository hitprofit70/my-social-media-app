import React from 'react'
import UsersCard from './UsersCard'

const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
            <UsersCard/>
            <UsersCard/>
            <UsersCard/>
            </div>
        </div>
    )
}

export default Main