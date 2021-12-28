import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { TouchableRipple } from 'react-native-paper';
import {
    requestMarketData,
    getCoinFollowMarket,
    onSearchData
} from './marketActions';
import BaseComponent from '../common/BaseComponent';
import HeaderSearchAnimateView from './subViews/HeaderSearchView';
import SymbolTagView from './subViews/SymbolTagView';
import CoinItemView from './subViews/CoinItemView';
import { scale } from '../../utils/RatioScale';

class MarketScreen extends BaseComponent {


    constructor(props) {
        super(props);

        this.marketFilter = [];
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return true
    // }

    _renderItem = ({ item, index }) => {
        return (
            <CoinItemView
                rowData={item}
                index={index}
                markets={this.marketFilter} />
        )
    }

    _keyExtractor = (item, index) => {
        return item.marketId;
    }

    _ItemSeparatorComponent = () => {
        return (
            <View style={{ height: scale(11) }} />
        )
    }

    render() {
        let {
            coinMarket,
            markets
        } = this.props;
        console.log('coinMarket', coinMarket)
        return (
            <View style={styles.container}>
                <HeaderSearchAnimateView
                    onChangeSearchText={this.onChangeSearchText} />
                <SymbolTagView
                    markets={markets}
                    idDefault={0}
                    onItemSelect={this.onMarketSelected} />

                <FlatList
                    ItemSeparatorComponent={this._ItemSeparatorComponent}
                    data={coinMarket}
                    enableEmptySections={true}
                    keyboardShouldPersistTaps='always'
                    scrollEventThrottle={16}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ alignItems: 'stretch' }}
                    // extraData={this.props}
                    style={{ marginTop: scale(15), flex: 1 }}
                />
            </View>
        );
    }

    componentDidMount() {
        this.props.requestMarketData();
    }

    onMarketSelected = (market) => {

        if (market) {
            console.log('onMarketSelected.2', market.title)
            this.marketFilter = market.list;
            this.props.getCoinFollowMarket({ title: market.title });
        }
    }

    onChangeSearchText = (search) =>{
        console.log('onChangeSearchText', search)
        this.props.onSearchData({search})
    }
}

function mapStateToProps(state) {
    return {
        markets: state.marketReducer.markets,
        coinMarket: state.marketReducer.coinMarket
    };
}

const mapDispatchToProps = {
    requestMarketData,
    getCoinFollowMarket,
    onSearchData
};
export default connect(mapStateToProps, mapDispatchToProps)(MarketScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FD'
    },

});