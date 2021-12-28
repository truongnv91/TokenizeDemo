import { put, takeLatest, takeEvery, select, call, delay } from 'redux-saga/effects';
import {
    setInitAppConfig
} from './loginActions';
import { STORE_KEY } from '../../utils/Constant';
import Utils from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import I18n from 'react-native-i18n';

function* onChangeLanguage(action) {
    let { type, data } = action;
    console.log('requestGenerateNumberList', type, data)
    Utils.storeStringData(STORE_KEY.LANGUAGE, data.language)
}

function* initAppSetting(action) {
    let { type, data } = action;
    console.log('initAppSetting', type, data)
    // yield call
    const result = yield call(
        () => new Promise((resolve) => {
            AsyncStorage.multiGet([STORE_KEY.LANGUAGE, STORE_KEY.SOUND_PLAY], (err, items) => {
                if (items) {
                    language = items[0][1] || 'vi';
                }
                resolve({ language });
            });
        })
    );
    
    yield put(setInitAppConfig({  }));
}

function* saveConfigSetting() {
    yield takeEvery('changeLanguage', onChangeLanguage);
}

function* initConfigSetting() {
    yield takeLatest('initAppSetting', initAppSetting);
}

export {
    saveConfigSetting,
    initConfigSetting
};