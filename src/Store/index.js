import { createStore } from "redux";
import RootReducer from './modules/rootReducer';


const store = createStore(RootReducer);

export default store;