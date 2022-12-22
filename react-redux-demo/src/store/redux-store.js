import {createStore} from 'redux';

const counterReducer = (state={counter:0}, action)=>{
    switch(action.type){
        case 'increment': return{
            counter: state.counter+1
        }
        case 'decrement': return{
            counter: state.counter-1
        }
        case 'incrementBy2': return{
            counter: state.counter+2
        }
        case 'decrementBy2': return{
            counter: state.counter-2
        }
    }
    return state;
}
const store = createStore(counterReducer);

export default store;



