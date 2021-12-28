import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ImageBackground,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import BaseComponent from '../common/BaseComponent';
import {
    LogoIcon,
    LockIcon,
    UserIcon,
    EyeIcon
} from '../../res/LoadSvg';
import { fontSize, scale } from '../../utils/RatioScale';
import { TextCustom } from '../common/TextCustom';
import { TouchableRipple } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

class LoginScreen extends BaseComponent {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.currentCard != this.state.currentCard
    //     ||nextState.currentCard != this.state.currentCard
    // }

    render() {
        let {
            email,
            password,
            isSavePass
        } = this.props;

        return (
            <ImageBackground style={styles.container}
                source={this.getPng().bg}
                resizeMode='cover'>
                <StatusBar hidden={false} />
                <View style={styles.view_logo}>
                    <LogoIcon
                        width={scale(55)}
                        height={scale(55)} />
                    <TextCustom style={styles.txt_title}>
                        {this.t('sign_in')}
                    </TextCustom>
                    <TextCustom style={styles.txt_sub_title}>
                        {this.t('sign_in_continue')}
                    </TextCustom>
                </View>
                <View style={styles.view_login}>
                    <View style={styles.view_input}>
                        <UserIcon
                            width={scale(16)}
                            height={scale(17)} />

                        <TextInput
                            placeholder={this.t('email')}
                            onChangeText={this.onChangeEmail}
                            value={email}
                            style={styles.textInput}
                            placeholderTextColor="#D6E1FF"
                            keyboardType='email-address'
                            underlineColorAndroid='rgba(0,0,0,0)'
                        />
                    </View>

                    <View style={[styles.view_input, { marginTop: scale(10) }]}>
                        <LockIcon
                            width={scale(16)}
                            height={scale(17)} />

                        <TextInput
                            placeholder={this.t('password')}
                            onChangeText={this.onChangePassword}
                            value={password}
                            style={styles.textInput}
                            placeholderTextColor="#D6E1FF"
                            underlineColorAndroid='rgba(0,0,0,0)'
                            secureTextEntry={true}
                        />

                        <TouchableRipple style={styles.btn_show_pass}>
                            <EyeIcon
                                width={scale(20)}
                                height={scale(14)} />
                        </TouchableRipple>
                    </View>

                    <View style={styles.view_remember}>
                        <TouchableOpacity style={styles.btn_save_pass}>
                            <View style={styles.view_check}>
                                <TextCustom style={styles.txt_check}>{isSavePass ? '✓' : ''}</TextCustom>
                            </View>
                            <TextCustom style={[styles.txt_check, { marginLeft: scale(6) }]}>{this.t('remember_me')}</TextCustom>
                        </TouchableOpacity>

                        <TextCustom style={[styles.txt_check, { paddingVertical: 5 }]}>{this.t('forgot_pass')}</TextCustom>
                    </View>
                </View>

                <View style={[styles.view_login]}>
                    <TouchableRipple style={styles.btn_sign_in}
                        onPress={this.onSignInPress}>
                        <TextCustom style={styles.txt_sign_in}>{this.t('sign_in').toUpperCase()}</TextCustom>
                    </TouchableRipple>

                    <TextCustom style={[styles.txt_sign_up, { marginTop: scale(20) }]}>
                        {this.t('dont_have_acc')}
                        <TextCustom style={[styles.txt_sign_up, { fontWeight: 'bold' }]}>
                            {this.t('sign_up')}
                        </TextCustom>
                    </TextCustom>
                </View>
            </ImageBackground>
        );
    }

    onSignInPress = () =>{
        this.props.navigation.navigate('MainApp')
    }

}

function mapStateToProps(state) {
    return {

    };
}

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view_logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getStatusBarHeight()
    },
    txt_title: {
        color: '#fff',
        fontSize: fontSize(23),
        fontWeight: '900',
        marginTop: scale(24)
    },
    txt_sub_title: {
        color: '#fff',
        fontSize: fontSize(16),
        fontWeight: '500',
        marginTop: scale(9)
    },
    view_login: {
        flex: 1,
        paddingHorizontal: scale(10),
        justifyContent: 'center'
    },
    view_input: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1.5,
        borderRadius: scale(5),
        borderColor: 'rgba(255, 255, 255, 0.2)',
        flexDirection: 'row',
        alignItems: 'center',
        height: scale(47),
        paddingLeft: scale(15)
    },
    textInput: {
        flex: 1,
        fontSize: fontSize(15),
        color: '#fff',
        fontWeight: '500',
        padding: 0,
        marginLeft: scale(10)
    },
    btn_show_pass: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: scale(15),
    },
    view_remember: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(10)
    },
    btn_save_pass: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: scale(5)
    },
    view_check: {
        width: scale(19),
        height: scale(19),
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1.5,
        borderRadius: scale(5),
        borderColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt_check: {
        fontSize: fontSize(14),
        color: '#fff',
        fontWeight: '500'
    },
    txt_sign_in: {
        fontSize: fontSize(14),
        fontWeight: '700',
        color: '#5073F2'
    },
    btn_sign_in: {
        height: scale(45),
        backgroundColor: '#BDCFFF',
        borderRadius: scale(6),
        elevation: 0.5,
        shadowColor: "rgba(98, 120, 241, 0.5)",
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt_sign_up: {
        fontSize: fontSize(14),
        color: '#fff',
        fontWeight: '400',
        textAlign: 'center'
    }
});