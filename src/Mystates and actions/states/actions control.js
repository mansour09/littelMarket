import {
    removeBuy,
    axiosFalse,
    axiosStart,
    axiosTrue,
    buyProduct,
} from "./action types";
//our global state
const myData = {
    items: [],
    purchesitems: [],
    isloading: true,
    msg: "",
    buycounter: 0,
};
// give action to our states and makes them dynamic
function giveAction(state = myData, action) {
    switch (action.type) {
        case axiosTrue:
            return {...state, items: action.payload, msg: "", isloading: false };
        case axiosFalse:
            return {...state, items: [], msg: action.payload, isloading: false };
        case axiosStart:
            return {...state, items: [], msg: "", isloading: true };
        case buyProduct:
            return {
                ...state,
                buycounter: state.buycounter + 1,
                purchesitems: state.purchesitems.concat(action.payload),
            };
        case removeBuy:
            return {...state, buycounter: 0, purchesitems: [] };
        default:
            return state;
    }
}

export default giveAction;