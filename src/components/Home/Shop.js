import React, { useState, useEffect } from 'react'
import './Shop.css'
import Catalog from './Catalog'
import Cart from './Cart'

const Shop = (props) => {
    return (
        <div className="row">
            <div className="column">
                <Catalog/>
            </div>
            <div className="column">
                <Cart/>
            </div>
        </div>
    )
}

export default Shop;