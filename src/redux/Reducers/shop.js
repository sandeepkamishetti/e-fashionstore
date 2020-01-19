import { GET_ITEMS_STARTED, GET_ITEMS_SUCCESS, GET_ITEMS_FAILED, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../Actions/shop"

let initialCatalogState = {
    items: [],
    loading: false,
    error: false

}

//Reducer for getting items from the API URL
const catalog = (state = initialCatalogState, action) => {
    switch (action.type) {
        case GET_ITEMS_STARTED:
            return {
                items: [],
                error: false,
                loading: true
            }
        case GET_ITEMS_SUCCESS:
                return {
                    items: action.items,
                    error: false,
                    loading: false
                }
        case GET_ITEMS_FAILED:
                return {
                    items: [],
                    error: true,
                    loading: false
                }            
        default: return state;
    }
}


//Reducer for handling the cart
const cart = (state = [], action) => {

    switch (action.type) {
        case ADD_ITEM_TO_CART:
        case REMOVE_ITEM_FROM_CART:
        default: return state;
    }
}