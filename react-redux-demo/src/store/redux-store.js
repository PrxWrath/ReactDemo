import {createStore} from 'redux';

const counterReducer = (state={counter:0}, action)=>{
    switch(action.type){
        case 'increment': return{
            counter: state.counter+action.step
        }
        case 'decrement': return{
            counter: state.counter-action.step
        }
        default: return state
    }
}
const store = createStore(counterReducer);

export default store;



