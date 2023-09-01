import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity } from 'react-native';

import { POSTER_IMAGE } from '../hooks/config';

import { GET } from '../hooks/API';
import Styles from '../Styles';
import Loader from './Loader';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constant from '../Constant';


const TrendingMovies = props => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState();



    useEffect(() => {
        const getMovies = async () => {

            const data = await GET('/movie/top_rated')
            setMovies(data.results)
            setLoading(false)
        };

        getMovies();
    }, []);

    // const searchMovies = () => {

    //     getMovies(searchKey)
    // }


    return (
        <View>
            {loading ? (
                <Loader />
            ) : (
                <View >
                    <View >
                        <Text style={Styles.headings}>{props.title}</Text>

                    </View>
                    <FlatList
                        keyExtractor={(item, index) => item.id + index.toString()}
                        data={movies}
                        horizontal
                        renderItem={item => displayMovies(item, props)}
                    />
                </View>
            )}
        </View>
    );
};

const displayMovies = ({ item }, props) => {
    return (
        <TouchableOpacity
            onPress={() => {
                key = { item }
                props.navigation.push('MovieDetail', { movieId: item.id });
            }}
            style={{ marginHorizontal: 10 }}>
            <Image
                source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }}
                style={Styles.posterImage}
            />
            <Text style={Styles.movieTitle}>{item.title}</Text>
        </TouchableOpacity>
    );
};

export default TrendingMovies;
