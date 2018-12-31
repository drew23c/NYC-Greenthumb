import {createStore, combineReducers} from 'redux';
import borosLocations from './reducers/gardens';

const rootReducers = combineReducers({
    boro: borosLocations
})

const configureStore = () => {
    return createStore(rootReducers)
}

export default configureStore;