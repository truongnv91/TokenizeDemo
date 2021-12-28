import * as React from 'react';
import { Text } from 'react-native';
import { fontSize } from '../../utils/RatioScale';

const TextCustom = (props) => {
    return (
        <Text
            style={[{ fontSize: fontSize(15), color: '#000' }, props.style]}>
            {props.children}
        </Text>
    );
};

export { TextCustom }