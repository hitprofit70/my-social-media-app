import React from 'react'
import Header from '../components/Header'
import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'
import Main from '../components/Main'

const Home = () => {
    return (
        <div>
            <Header />
            <LeftSideBar />
            <Main />
            <RightSideBar />
        </div>
    )
}

export default Home