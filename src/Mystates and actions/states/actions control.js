import {
    removeBuy,
    axiosFalse,
    axiosStart,
    axiosTrue,
    buyProduct,
    userEnter,
    loginFaild,
    userLogout,
} from "./action types";
//our global state
const axiosData = {
    items: [],
    purchesitems: [],
    isloading: true,
    msg: "",
    buycounter: 0,
};

const User = {
    userdata: [],
    login: false,
    massage: "",
};
// give action to our states and makes them dynamic
export function giveAction(state = axiosData, action) {
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

export function userAction(state = User, action) {
    switch (action.type) {
        case userEnter:
            return { userdata: action.payload, login: true, massage: "" };
        case loginFaild:
            return { userdata: [], login: false, massage: action.payload };
        case userLogout:
            return { userdata: [], login: false, massage: "" };
        default:
            return state;
    }
}