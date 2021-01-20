import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS } from '../actions/actions';

// reducer
export const reducer = (state, action) => {
    switch (action.type) {
        case CLEAR_CART:
            return { ...state, cart: [] }
        case DECREASE:
            let tempCarts = [];

            if (action.payload.amount === 1) {
                tempCarts = state.cart.filter(item => item.id !== action.payload.id)

            } else {
                tempCarts = state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        item = { ...item, amount: item.amount - 1 }
                    }
                    return item;
                })
            }

            return { ...state, cart: tempCarts }
        case INCREASE:
            let tempCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    item = { ...item, amount: item.amount + 1 }
                }
                return item;
            });
            return { ...state, cart: tempCart }
        case REMOVE:
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) }

        case GET_TOTALS: {
            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemTotal = price * amount;
                cartTotal.total += itemTotal;
                cartTotal.amount += amount;
                return cartTotal;
            }, {
                total: 0,
                amount: 0
            });
            return { ...state, total, amount };

        }
        default:
            return state;
    }
}