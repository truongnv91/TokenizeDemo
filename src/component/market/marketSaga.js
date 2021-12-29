import { put, takeLatest, takeEvery, select, call, delay } from 'redux-saga/effects';
import {
    initMarketData,
    responseSearchMarket
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

    yield put(initMarketData({ markets: market.data, coinList: summaries.data }));
}

function* requestSearchData(action) {
    let { search, coinMarket } = action.data;
    let clone = Array.from(coinMarket);
    let coins = clone.filter((obj) => {
        return obj?.market?.toUpperCase().includes(search.toUpperCase());
    });
    // console.log('requestSearchData', search)

    yield put(responseSearchMarket({ coinMarket: coins }));
}

function* getMarketData() {
    yield takeEvery('requestMarketData', requestMarketData);
}

function* searchMarketData() {
    yield takeLatest('onSearchData', requestSearchData);
}

export {
    getMarketData,
    searchMarketData
};