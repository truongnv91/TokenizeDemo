import { put, takeLatest, takeEvery, select, call, delay } from 'redux-saga/effects';
import {
    initMarketData
} from './marketActions';
import request from '../../api';
import ApiService from '../../api/ApiService';

function* requestMarketData(action) {
    let { type, data } = action;
    console.log('requestMarketData', type, data)
    // yield call
    const market = yield call(
        () => new Promise(async (resolve) => {
            let response = await request.httpRequestGet(ApiService.getmarkets());
            resolve(response)
        })
    );
    const summaries = yield call(
        () => new Promise(async (resolve) => {
            let response = await request.httpRequestGet(ApiService.get_summaries());
            resolve(response)
        })
    );

    yield put(initMarketData({markets: market.data, coinList: summaries.data}));
}

function* getMarketData() {
    yield takeEvery('requestMarketData', requestMarketData);
}

export {
    getMarketData,
};