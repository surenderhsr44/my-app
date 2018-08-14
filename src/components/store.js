import {createStore} from 'redux';
import mainReducer from './reducers';

const configureStore = () =>{
	return createStore(mainReducer, {currentValue:100});
}
export default configureStore;