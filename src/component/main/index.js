import React from 'react';
import { Image, View, Platform } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import I18n from 'react-native-i18n';
import MarketScreen from '../market';
import OtherScreen from '../other';
import { isIphoneX } from 'react-native-iphone-x-helper';
import {
    HomeNormal,
    MarketFocus,
    PortfolioNormal,
    WalletNormal,
    MoreNormal,
    HomeFocus,
    MarketNormal,
    PortfolioFocus,
    WalletFocus,
    MoreFocus
} from '../../res/LoadSvg';
import { scale, fontSize } from '../../utils/RatioScale';

const ICON_SIZE = Platform.OS == 'ios' ? scale(30) : scale(25);

const BottomNavigator = createMaterialTopTabNavigator({
    OtherScreen1: {
        screen: OtherScreen,
        navigationOptions: ({ navigation, navigationOptions }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                if (focused) {
                    return (
                        <HomeFocus
                            width={ICON_SIZE}
                            height={ICON_SIZE} />
                    )
                }
                return (
                    <HomeNormal
                        width={ICON_SIZE}
                        height={ICON_SIZE} />
                )
            },
            title: I18n.t('home')
        }),
    },
    MarketScreen: {
        screen: MarketScreen,
        navigationOptions: ({ navigation, navigationOptions }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                if (focused) {
                    return (
                        <MarketFocus
                            width={ICON_SIZE}
                            height={ICON_SIZE} />
                    )
                }
                return (
                    <MarketNormal
                        width={ICON_SIZE}
                        height={ICON_SIZE} />
                )
            },
            title: I18n.t('market')
        }),
    },
    OtherScreen2: {
        screen: OtherScreen,
        navigationOptions: ({ navigation, navigationOptions }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                if (focused) {
                    return (
                        <WalletFocus
                            width={ICON_SIZE}
                            height={ICON_SIZE} />
                    )
                }
                return (
                    <WalletNormal
                        width={ICON_SIZE}
                        height={ICON_SIZE} />
                )
            },
            title: I18n.t('wallets')
        }),
    },
    OtherScreen3: {
        screen: OtherScreen,
        navigationOptions: ({ navigation, navigationOptions }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                if (focused) {
                    return (
                        <PortfolioFocus
                            width={ICON_SIZE}
                            height={ICON_SIZE} />
                    )
                }
                return (
                    <PortfolioNormal
                        width={ICON_SIZE}
                        height={ICON_SIZE} />
                )
            },
            title: I18n.t('portfolio')
        }),
    },
    OtherScreen4: {
        screen: OtherScreen,
        navigationOptions: ({ navigation, navigationOptions }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                if (focused) {
                    return (
                        <MoreFocus
                            width={ICON_SIZE}
                            height={ICON_SIZE} />
                    )
                }
                return (
                    <MoreNormal
                        width={ICON_SIZE}
                        height={ICON_SIZE} />
                )
            },
            title: I18n.t('more')
        }),
    },

},
    {
        tabBarOptions: {
            upperCaseLabel: false,
            allowFontScaling: false,
            upperCaseLabel: false,
            showLabel: true,
            showIcon: true,
            tabStyle: {
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 0,
                marginVertical: 0,
            },
            style: {
                backgroundColor: '#fff',
                height: isIphoneX() ? 70 : Platform.isPad ? 80 : 65,
                borderTopColor: '#EBEBEB',
                borderTopWidth: 1,
                justifyContent: 'center',
                paddingBottom: isIphoneX() ? 10 : 0,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5
            },
            indicatorStyle: {
                backgroundColor: '#6081FA',
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                height: 3,
                borderRadius: 2
            },
            labelStyle: {
                fontSize: isIphoneX() ? fontSize(12) : fontSize(13),
                fontWeight: '600'
            },
            activeTintColor: '#6081FA',
            inactiveTintColor: '#9EA1C6'
        },
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        lazy: true,
        initialRouteName: 'MarketScreen'
    }
);
const Container = createAppContainer(BottomNavigator);

export default Container;