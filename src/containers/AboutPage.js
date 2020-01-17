import React, {useState, useEffect} from 'react'
import Header from '../components/Global/Header'
import About from '../components/About/About'
import Footer from '../components/Global/Footer'

const AboutPage = (props) => {
    
    return(
        <React.Fragment>
            <Header/>
            <About/>
            <Footer/>
        </React.Fragment>
    )
    
}

export default AboutPage;