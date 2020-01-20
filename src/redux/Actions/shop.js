import axios from 'axios'

//URL for getting the cstslog items
export const GET_ITEMS_API_URL = 'http://api.jsoneditoronline.org/v1/docs/572180836c614dadb4b2eccdc3a33cbc/data?jsonp'
//Actions
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'

export const GET_ITEMS_STARTED = 'GET_ITEMS_STARTED'
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED'

//Action Creators for Thunk function to use
export function addItemToCart(item){
    return { //Action object is returned
        type: ADD_ITEM_TO_CART,
        item
    }
}

export function removeItemFromCart(item) {
    return {
        type: REMOVE_ITEM_FROM_CART,
        item
    }
    
}

export function getItemsStarted() {
    return{
        type: GET_ITEMS_STARTED
    }
}

export function getItemsSuccess(item) {
    return{
        type: GET_ITEMS_SUCCESS,
        item
    }
}

export function getItemsFailed(error){
    return {
        type: GET_ITEMS_FAILED,
        error
    }
}

//Thunk function is also one of the action creator
//Below is a Thunk function to get items from API
export function getItems(){
    return function(dispatch){
        dispatch(getItemsStarted());
        axios.get(GET_ITEMS_API_URL)
        .then((result)=>{
            console.log("Resuslt is:  "+ JSON.stringify(result))
            dispatch(getItemsSuccess(result.data.response.products));
        })
        .catch((error)=>{
            dispatch(getItemsFailed(error));
        })



    }
}