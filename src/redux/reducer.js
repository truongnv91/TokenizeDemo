import { combineReducers } from 'redux';

import loginReducer from '../component/login/loginReducer';
import marketReducer from '../component/market/marketReducer';

const AppReducer = combineReducers({
    loginReducer,
    marketReducer
});
export default AppReducer;
