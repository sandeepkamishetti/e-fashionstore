import React, {useState, useEffect} from 'react'
import Header from '../components/Global/Header'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Global/Footer'

const ContactPage = (props) => {
    return(
        <React.Fragment>
            <Header/>
            <Contact/>
            <Footer/>
        </React.Fragment>
    )
}

export default ContactPage;