import React, { PureComponent, Component } from 'react';
import {
    BackHandler
} from 'react-native';
import I18n from 'react-native-i18n';
import orientation from 'react-native-orientation';
import LoadPng from '../../res/LoadPng';
import LoadSvg from '../../res/LoadSvg';

String.prototype.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

export default class BaseComponent extends Component {

    handleHardwareBackPress(callback) {
        let self = this;
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', function () {
            self.onBackPress();
            return true;
        });
    }

    unRegisterBack() {
        if (this.backHandler) {
            this.backHandler = null;
        }
    }

    t(text) {
        return I18n.t(text);
    }

    rotateToLandscape() {
        orientation.lockToLandscape();
    }

    rotateToPortrait() {
        orientation.lockToPortrait();
    }

    getPng() {
        return LoadPng;
    }

    getSvg() {
        return LoadSvg;
    }

    t(key) {
        return I18n.t(key);
    }

    changeLanguage(lang) {
        I18n.changeLanguage(lang)
    }

}