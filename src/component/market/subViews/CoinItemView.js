import React, { useState, useEffect } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {
    DownRed,
    UpGreen
} from '../../../res/LoadSvg';
import I18n from 'react-native-i18n';
import { fontSize, scale } from '../../../utils/RatioScale';
import FastImage from 'react-native-fast-image';
import { TextCustom } from '../../common/TextCustom';
import utils from '../../../utils';

export default function CoinItemView({ rowData, markets }) {

    let lastPrice = rowData.lastPrice;
    let openPrice = rowData.openPrice;
    let market = rowData.market;
    let marketName = market.split('-');
    let symbol = marketName?.[1];
    let coin = markets.find((obj) => {
        return obj.marketCurrency == symbol;
    })
    let lastPriceFormat = utils.formatPrice(lastPrice);
    let percent = parseFloat((lastPrice - openPrice) * 100 / openPrice).toFixed(2)
    return (
        <View style={styles.contain}>
            <FastImage style={styles.img_icon}
                resizeMode={'cover'}
                source={{ uri: 'https://media.istockphoto.com/vectors/bitcon-golden-coin-vector-id944487124' }}
            />
            <View style={styles.view_center}>
                <TextCustom style={styles.txt_symbol}>
                    {symbol}
                </TextCustom>
                <TextCustom style={styles.txt_name}>
                    {coin? coin.marketCurrencyLong: ''}
                </TextCustom>
            </View>
            <View style={styles.view_right}>
                <TextCustom style={styles.txt_price}>
                    {`$${lastPriceFormat}`}
                </TextCustom>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <TextCustom style={[styles.txt_percent, { color: percent >= 0 ? '#3BBA7D' : '#F94B5C' }]}>
                        {`${percent}%`}
                    </TextCustom>
                    <View style={{ marginBottom: 3, marginLeft: 3 }}>
                        {percent >= 0 ?
                            <UpGreen
                                width={scale(5)}
                                height={scale(8)} /> :
                            <DownRed
                                width={scale(5)}
                                height={scale(8)} />}
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: scale(10),
        borderRadius: scale(8),
        paddingVertical: scale(17),
        paddingHorizontal: scale(18),
        backgroundColor: '#fff'
    },
    img_icon: {
        width: scale(40),
        height: scale(40),
        borderRadius: scale(8)
    },
    view_center: {
        flex: 1,
        marginLeft: scale(15)
    },
    txt_symbol: {
        color: '#3D436C',
        fontWeight: '700',
        fontSize: fontSize(15)
    },
    txt_name: {
        color: '#8E92B2',
        fontWeight: '400',
        fontSize: fontSize(14)
    },
    view_right: {
        justifyContent: 'flex-end'
    },
    txt_price: {
        color: '#3D436C',
        fontSize: fontSize(15),
        fontWeight: '700'
    },
    txt_percent: {
        fontSize: fontSize(13),
        fontWeight: '500'
    }
});