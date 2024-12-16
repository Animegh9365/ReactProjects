//Create the initial state
const initialstate = {
    cart: [],
    totalAmount: 0,
    itemCount: 0
}

// Create action types
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const ADJUST_QUANTITY = 'ADJUST_QUANTITY'

// Create action controllers
export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item
})

export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    payload: itemId
})

export const adjustQuantity = (itemId, adjustQuantity) => ({
    type: ADJUST_QUANTITY,
    payload: {
        itemId,
        adjustQuantity
    }
})


function reducer(state = initialstate, action) {
    switch(action.type) {
        case ADD_TO_CART:
            const existingItem = state.cart.findIndex((item => item.id === action.payload.id))
            let updatedCart
            if (existingItem >= 0) {
                updatedCart = state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + action.payload.quantity
                        }
                    }
                    return item
                })
            } else {
                updatedCart = [...state.cart, action.payload]
            }
            return {
                ...state,
                cart: updatedCart,
                totalAmount: state.totalAmount + action.payload.price * action.payload.quantity,
                totalCount: state.totalCount + action.payload.quantity
            }
    }
}