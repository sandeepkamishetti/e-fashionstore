import React, {useState, useEffect} from 'react'
import Header from '../components/Global/Header'
import Footer from '../components/Global/Footer'
import Shop from '../components/Home/Shop'

const HomePage = (props) => {
    return(
        <React.Fragment> {/* React.Fragment does not create a DOM element at all */}
            <Header/>
            <Shop/>
            <Footer/>
        </React.Fragment>
    )
}

export default HomePage;