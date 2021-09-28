import { combineReducers } from "redux";
import giveAction from "../states/actions control";
//this is redux comine for give action to state

export default combineReducers({
    allaction: giveAction,
});