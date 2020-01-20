import { GET_ITEMS_STARTED, GET_ITEMS_SUCCESS, GET_ITEMS_FAILED, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../Actions/shop"
//import { act } from "react-dom/test-utils"

let initialCatalogState = {
    items: [],
    loading: false,
    error: false

}

//Reducer for getting items from the API URL
export const catalog = (state = initialCatalogState, action) => {
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

var initialCartState = {
    cartItems: [],
    orderTotal: 0
}
//Reducer for handling the cart
export const cart = (state = initialCartState, action) => {

    switch (action.type) {
        case ADD_ITEM_TO_CART:
            var doesItemExist = state.cartItems.some((item) => {
                return item.uniqueID === action.item.uniqueID
            })

            if (doesItemExist) {
                action.item.qty += 1;
                var latestCartItems = state.cartItems.filter((item) => {
                    return item.uniqueID !== action.item.uniqueID;
                })
                return {
                    cartItems: [...latestCartItems, action.item],
                    orderTotal: latestCartItems.reduce((total, item) => {
                        return total + item.price * item.qty
                    }, 0) + action.item.price * action.item.qty
                }
            }

            else {
                action.item.qty = 1;
                return {
                    cartItems: [...state, action.item],
                    orderTotal: state.cartItems.reduce((total, item) => {
                        return total + item.price * item.qty
                    }, 0) + action.item.price * action.item.qty
                }
            }
        case REMOVE_ITEM_FROM_CART:
            var latestCartItems = state.filter((itemToBeRemoved) => {
                return itemToBeRemoved.uniqueID != action.item.uniqueID
            })
            return {
                cartItems: latestCartItems,
                orderTotal: latestCartItems.reduce((total, item) => {
                    return total + item.price * item.qty
                }, 0)
            }
        default: return state;
    }
}