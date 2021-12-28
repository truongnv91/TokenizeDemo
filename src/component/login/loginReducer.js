
const initialState = {
    language: 'vi',
    isSavePass: false,
}

const loginReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'setInitAppConfig': {
            let { language, isSavePass } = action.data;
            return {
                ...state,
                language,
                isSavePass
            };
        }
        default: {
            return state;
        }
    }
}

export default loginReducer;