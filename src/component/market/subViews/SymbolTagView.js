import React, { useState, useEffect } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import I18n from 'react-native-i18n';
import { fontSize, scale } from '../../../utils/RatioScale';

const SYMBOL = ['BTC', 'ETH', 'SGD', 'USD'];

function ItemView({ isSelected, label, onItemSelect, index }) {

    if (isSelected) {
        return (
            <TouchableOpacity style={[styles.view_item, { backgroundColor: '#6992FF' }]}
            >
                <Text style={[styles.txt_label, { color: '#fff' }]}>
                    {label}
                </Text>
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity style={[styles.view_item, { backgroundColor: '#E4E9F9' }]}
            onPress={() => { onItemSelect(index) }}>
            <Text style={[styles.txt_label, { color: '#8E92B2' }]}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default function SymbolTagView({ idDefault, onItemSelect, markets }) {

    let [indexSelected, changeIndexSelect] = useState(idDefault);

    useEffect(() => {
        if (onItemSelect) {
            onItemSelect(markets[indexSelected], indexSelected);
        }
    }, [indexSelected]);

    let ItemList = markets.map((obj, index) => {
        return (
            <ItemView
                label={obj.title}
                index={index}
                isSelected={indexSelected == index}
                onItemSelect={(index) => { changeIndexSelect(index) }} />
        )
    })
    return (
        <ScrollView horizontal={true}
            style={{ flexGrow: 0 }}>
            <View style={styles.contain}>
                {ItemList}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: scale(10),
        marginVertical: 5
    },
    view_item: {
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(32),
        width: scale(78),
        borderRadius: scale(6),
        marginHorizontal: scale(5)
    },
    txt_label: {
        fontSize: fontSize(13),
        fontWeight: '600'
    }
});