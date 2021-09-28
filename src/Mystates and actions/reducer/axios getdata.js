//request with axios

import axios from "axios";
import {
    axiosFalse,
    axiosStart,
    axiosTrue,
    buyProduct,
} from "../states/action types";

export async function loadData(dispatch) {
    const data = await axios.get("http://apitester.ir/api/Products");
    //request starts
    dispatch({
        type: axiosStart,
    });
    if (data.status === 200) {
        //request was true pass our data
        dispatch({
            type: axiosTrue,
            payload: data.data,
        });
    } else
        dispatch({
            //request was faild pass err
            type: axiosFalse,
            payload: data.statusText,
        });
}

export function purches(dispatch, name, id, price) {
    //get our purche and pass our purches data
    let ourpurches = {
        name: name,
        id: id,
        price: price,
    };
    dispatch({
        type: buyProduct,
        payload: ourpurches,
    });
}