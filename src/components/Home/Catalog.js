import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { getItems } from '../../redux/Actions/shop'
import Item from './Item'

/*The initial method executed after a component is rendered is componentDidMount(). We can achieve this
with useEffect hook*/
const Catalog = (props) =>{
    let [items, setItems] = useState([])

 /*As soon as the catalog component loads, we need to call the backend API. This method is executed once the catalog is rendered*/
    useEffect(()=>{
//connect() function takes two arguments ---> mapStateToProps and mapDispatchToProps

        props.getItems();
    },[]) // Here the dependency array is an empty array.

    useEffect(()=>{ //To capture the props when there is a change in the props
        setItems = props.items
    },[props])

    return(
        <React.Fragment>
        <h1>Catalog</h1>
        {
            items.map((item) => {
                console.log("Hey you")
                return <Item key = {item.uniqueId} item = {Item}/>
            })
        }
        </React.Fragment>
    )
}

var mapStateToProps = (state) => { //This is a function that will get the state
    return {
        items: state.catalog.items
    }
}

// If this were a class components, we can access the getItems action via this.props.getItems
var mapDispatchToProps = {
    getItems
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);