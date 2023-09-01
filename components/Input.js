import { View, } from 'react-native';
import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Constant from '../Constant';
import { useNavigation } from '@react-navigation/native';

const Input = () => {
    const navigation = useNavigation()
    return (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                <Icon name='search' size={24} color={Constant.textColor} />

            </TouchableOpacity>
        </View>
    )
}

export default Input