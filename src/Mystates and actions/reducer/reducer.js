import { combineReducers } from "redux";
import { giveAction, userAction } from "../states/actions control";
//this is redux comine for give action to state

export default combineReducers({
    allaction: giveAction,
    useraction: userAction,
});