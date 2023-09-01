import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, ActivityIndicator, ScrollViewBase } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import Styles from '../Styles';
import { FlatList, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Constant from '../Constant';
import { GET } from '../hooks/API';
import { IMAGE_POSTER_URL } from '../hooks/config';



const SearchScreen = (props) => {

    const [userInput, setUserInput] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);


    const filterData = (item, index) => {
        //if the input is empty
        if (userInput === "") {
            return (
                <SafeAreaView >
                    <TouchableOpacity onPress={() => {
                        key = { item }
                        props.navigation.push('MovieDetail', { movieId: item.id });
                    }}>
                        <Image
                            source={{ uri: `${IMAGE_POSTER_URL}${item.poster_path}` }}
                            style={Styles.searchImage}
                        />
                        <Text style={Styles.movieTitle}>{item.title}</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            )
        }
        //if the user has started searching
        if (item.title.toLowerCase().includes(userInput.toLowerCase())) {
            return (
                <SafeAreaView key={data}>
                    <TouchableOpacity onPress={() => props.navigation.push('MovieDetail', { movieId: data[index].id })}>
                        <Image
                            source={{ uri: `${IMAGE_POSTER_URL}${item.poster_path}` }}
                            style={Styles.searchImage}
                        />
                        <Text style={Styles.movieTitle}>{item.title}</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            )
        }
    };
    useEffect(() => {
        fetchMovies()
    }, [])
    const fetchMovies = async () => {
        const data = await GET('/discover/movie')
        setIsLoading(true)
        setData(data.results)
        setIsLoading(false)
    };

    return (
        <View style={Styles.searchBg} >
            <View style={{ marginTop: 80 }}>
                <TextInput
                    placeholder="Search"
                    style={styles.searchBox}
                    value={userInput}
                    onChangeText={(text) => setUserInput(text)}
                    clearButtonMode="always"

                />
                <FlatList
                    keyExtractor={(item, index) => item.id + index.toString()}
                    data={data}
                    renderItem={({ item, index }) => (
                        filterData(item, index)
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                />


            </View>
            {/*results*/}
        </View>





    )
}

export default SearchScreen

const styles = StyleSheet.create({
    searchBox: {
        backgroundColor: Constant.fededColor,
        padding: 10,
        paddingLeft: 10,
        borderRadius: 10,
        color: "#000",
        borderWidth: 1,
        bottom: 10
    },



})