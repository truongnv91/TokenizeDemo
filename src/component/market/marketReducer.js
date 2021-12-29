
const initialState = {
    coinList: [],
    markets: [],
    coinMarket: []
}

const marketReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'initMarketData': {
            let { coinList, markets } = action.data;
            return {
                ...state,
                coinList,
                markets
            };
        }
        case 'getCoinFollowMarket': {
            let { title } = action.data;
            let coins = state.coinList.filter((obj) => {
                return obj?.market?.startsWith(title)
            });
            return {
                ...state,
                coinMarket: coins,
            };
        }
        case 'responseSearchMarket': {
            let { coinMarket } = action.data;
            // let clone = Array.from(state.coinMarket);
            // let coins = clone.filter((obj) => {
            //     return obj?.market?.toUpperCase().includes(search.toUpperCase());
            // });
            return {
                ...state,
                coinMarket,
            };
        }
        default: {
            return state;
        }
    }
}

export default marketReducer;