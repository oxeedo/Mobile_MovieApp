import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import DiscoverMovie from './DiscoverMovie'
import Styles from '../Styles'
import Constant from '../Constant'
import TrendingPeople from '../components/TrendingPeople'
import TrendingMovies from '../components/TrendingMovies'


const deviceHeight = Dimensions.get('window')

const HomeScreen = (props) => {
    return (
        <View style={Styles.sectionBg}>
            <DiscoverMovie navigation={props.navigation} />
            <TrendingPeople title="Trending People" url='/trending/person/week' navigation={props.navigation} />
            <TrendingMovies title="Trending Movies" url='/movie/top_rated' navigation={props.navigation} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})