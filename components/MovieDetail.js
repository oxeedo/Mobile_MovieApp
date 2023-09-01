import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState, } from 'react'
import { GET } from '../hooks/API';
import Loader from './Loader';
import Styles from '../Styles';
import { IMAGE_POSTER_URL } from '../hooks/config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import Constant from '../Constant';
import TrendingMovies from './TrendingMovies';
import TrendingPeople from './TrendingPeople';
import { Linking } from "react-native";

const MovieDetail = props => {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState();

    useEffect(() => {
        const getDetails = async () => {
            const data = await GET(`/movie/${props.route.params.movieId}`)
            setDetails(data);
            setLoading(false);

        }
        getDetails()
    }, [])
    const getGenre = () => {
        return details.genres.map((genre) =>
            <View style={Styles.genreContainer}>
                <Text key={genre} style={Styles.genre}>{genre.name}</Text>
            </View>)
    }
    return (
        <ScrollView style={Styles.sectionBg}>
            {loading ? <Loader /> : <View>
                <Image source={{ uri: `${IMAGE_POSTER_URL}${details.backdrop_path}` }} style={Styles.imageBg} />
                <Text style={Styles.movieDetailsTitle}>{details.original_title}</Text>
                {
                    details.homepage ? <View style={Styles.linkContainer}>
                        <TouchableOpacity onPress={() => { Linking.openURL(details.homepage) }}>
                            <Icon name="link" color={Constant.textColor} size={22} />

                        </TouchableOpacity>
                    </View> : null
                }
                <Text style={Styles.headings}>OVERVIEW</Text>
                <Text style={Styles.overview}>{details.overview}</Text>
                <View style={Styles.detailsContainer}>
                    <View>
                        <Text style={Styles.headingss}>BUDGET</Text>
                        <Text style={Styles.details}>${details.budget}</Text>
                    </View>
                    <View>

                        <Text style={Styles.headingss}>DURATION</Text>
                        <Text style={Styles.details}>{details.runtime} min.</Text>
                    </View>
                    <View>

                        <Text style={Styles.headingss}>RELEASE DATE</Text>
                        <Text style={Styles.details}>{details.release_date}</Text>
                    </View></View>
                <Text style={Styles.headingss}>GENRE</Text>
                <View style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>{getGenre()}</View>
                <TrendingPeople title="CAST" url={`/movie/${props.route.params.movieId}/credits`}
                    isForPage="details"
                />


                <TrendingMovies title="Similar Movies"
                    navigation={props.navigation}
                    url={`/movie/${props.route.params.movieId}/similar`} />
            </View>}
        </ScrollView>
    )
}

export default MovieDetail

const styles = StyleSheet.create({})