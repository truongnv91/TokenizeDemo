import { all, fork } from 'redux-saga/effects';
import {
    initConfigSetting
} from '../component/login/loginSaga';
import {
    getMarketData
} from '../component/market/marketSaga';

export default function* rootSaga() {
    yield all([
        fork(initConfigSetting),
        fork(getMarketData),
    ]);
}
