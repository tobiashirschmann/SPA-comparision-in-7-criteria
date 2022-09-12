import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/count.actions'


const initState = 0
const counterFunction = createReducer(
    initState,
    on(actions.increment, (state) => state+1),

)

export default function countReducer(state: any, action: Action){
    return counterFunction(state, action);
}