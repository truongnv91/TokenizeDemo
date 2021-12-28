import React from 'react';
import ReactNative, { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
// import TextInputReset from 'react-native-text-input-reset';
import {
    Search,
    CloseDarkIcon,
    SearchWhtieIcon,
} from '../../../res/LoadSvg';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import BaseComponent from '../../common/BaseComponent';
import { fontSize, scale } from '../../../utils/RatioScale';

const WAIT_INTERVAL = 250;

export default class HeaderSearchAnimateView extends BaseComponent {

    static defaultProps = {
        isHideCancelBtn: true,
        autoFocus: true
    }

    constructor(props) {
        super(props);
        this.triggerChange = this.triggerTextChange.bind(this);
        this.waitingInterval = this.props.waitingInterval || WAIT_INTERVAL;
        this.state = {
            textSearch: '',
            isHideClear: true,
            isHideCancelBtn: true,
            isSearching: false
        }

        this.onInputSearchChange = this.onInputSearchChange.bind(this);
        this.onClearSearchClick = this.onClearSearchClick.bind(this);
        this.onCancelSearchClick = this.onCancelSearchClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.textSearch != this.state.textSearch
            || nextState.isHideClear != this.state.isHideClear
            || nextState.isHideCancelBtn != this.state.isHideCancelBtn
            || nextState.isSearching != this.state.isSearching;
    }

    setTextValue(text) {
        this.textInput.setNativeProps({
            text: text
        });
    }

    render() {
        let {
            isHideCancelBtn,
            isSearching
        } = this.state;
        return (
            <View
                style={[styles.container]}>
                <View style={[styles.container_header]}>

                    {isSearching && <View style={styles.search_group}>
                        <Search
                            width={styles.icon_clear.width}
                            height={styles.icon_clear.height} />

                        <TextInput allowFontScaling={global.isScaleFont}
                            ref={(textInput) => { this.textInput = textInput; }}
                            style={styles.input_search}
                            placeholder={this.t('press_to_search')}
                            placeholderTextColor='#a1a1a1'
                            underlineColorAndroid='rgba(0,0,0,0)'
                            // value={this.state.textSearch}
                            autoFocus={true}
                            onKeyDown={this.handleKeyDown}
                            onFocus={this.onInputTextFocus}
                            onChangeText={this.onInputSearchChange}>
                        </TextInput>
                    </View>}

                    {!isSearching ?
                        <View style={[styles.view_title]}>
                            <Text allowFontScaling={global.isScaleFont} style={styles.text_title} numberOfLines={1}>
                                {this.t('market').toUpperCase()}
                            </Text>
                            <TouchableOpacity style={{ width: scale(50), height: scale(50), justifyContent: 'center', alignItems: 'center' }}
                                onPress={this.onStartSearchPress}>
                                <Search
                                    width={styles.icon_search.width}
                                    height={styles.icon_search.height} />
                            </TouchableOpacity>
                        </View>
                        : null}
                    {!isHideCancelBtn &&
                        <TouchableRipple onPress={this.onCancelSearchClick}
                            style={styles.view_cancel}>
                            <Text style={styles.text_cancel}>{this.t('cancel')}</Text>
                        </TouchableRipple>}

                </View>
            </View>
        );
    }

    setFocus() {
        if (this.textInput) {
            this.textInput.focus();
        }
    }

    onInputTextFocus = () => {
        this.setState({
            textSearch: '',
            isHideClear: true,
            isHideCancelBtn: false
        })
    }

    onInputSearchChange(input) {
        clearTimeout(this.timer);
        if (input.length > 0) {
            this.setState({
                isHideClear: false,
                textSearch: input,
                isHideCancelBtn: false
            }, () => {
                if (input.length > 1) {
                    this.timer = setTimeout(this.triggerChange, this.waitingInterval);
                } else {
                    this.triggerTextChange();
                }
            });

        } else {
            this.setState({
                isHideClear: true,
                textSearch: input,
                isHideCancelBtn: false
            }, () => this.triggerTextChange());
        }

    }

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            this.triggerChange();
        }
    }

    triggerTextChange() {
        if (this.props.onChangeSearchText != null) {
            this.props.onChangeSearchText(this.state.textSearch);
        }
    }

    onClearSearchClick() {
        this.setState({
            isHideClear: true,
            textSearch: ''
        }, () => {
            this.textInput.clear();

            if (Platform.OS === 'ios') {
                this.textInput.setNativeProps({ text: ' ' });
            }
            setTimeout(() => {
                this.textInput.setNativeProps({ text: '' });
            });

            // if (TextInputReset)
            //     TextInputReset.resetKeyboardInput(ReactNative.findNodeHandle(this.textInput));
        });
        if (this.props.onChangeSearchText) {
            this.props.onChangeSearchText('');
        }
    }

    onStartSearchPress = () => {
        this.setState({
            isHideClear: true,
            textSearch: '',
            isSearching: true
        })
    }

    onCancelSearchClick() {
        this.setState({
            isHideCancelBtn: true,
            isSearching: false
        }, () => {
            if (this.props.onCancelSearch != null) {
                this.props.onCancelSearch();
            }
            Keyboard.dismiss();
        })

    }

}

const styles = StyleSheet.create({
    container: {
        height: 80,
    },
    container_header: {
        flex: 1,
        flexDirection: 'row',
        marginTop: getStatusBarHeight(),
        alignItems: 'center'
    },
    search_group: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: scale(8),
        marginRight: scale(10),
        paddingLeft: scale(10),
        marginLeft: scale(15),
        height: scale(33),
        alignItems: 'center'
    },
    icon_search: {
        width: scale(23),
        height: scale(23),
    },
    input_search: {
        flex: 1,
        fontSize: fontSize(15),
        paddingTop: 0,
        paddingBottom: 0,
        color: '#1A1A1A',
        marginLeft: scale(10),
    },
    touch_clear: {
        padding: scale(10)
    },
    icon_clear: {
        width: scale(20),
        height: scale(20)
    },
    view_cancel: {
        padding: scale(10),
    },
    text_cancel: {
        color: '#3D436C',
        fontSize: fontSize(15)
    },
    text_title: {
        flex: 1,
        color: '#000',
        fontSize: fontSize(16),
        fontWeight: 'bold',
        marginLeft: scale(10)
    },
    view_title: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
});

