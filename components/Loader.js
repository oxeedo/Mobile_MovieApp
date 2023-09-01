import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react';
import Constant from '../Constant';

const Loader = () => {
    return (
        <View>
            <View>
                <ActivityIndicator size="large" color={Constant.textColor} />
            </View>
        </View>
    )
}

export default Loader