import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { GET } from '../hooks/API';

import { SliderBox } from "react-native-image-slider-box";
import Constant from '../Constant';
import { IMAGE_POSTER_URL } from '../hooks/config';


const DiscoverMovie = (props) => {
    const [movies, setMovies] = useState([]);
    const [images, setImages] = useState([]);



    const getMovies = async () => {

        const response = await GET(`/discover/movie`);
        setMovies(response.results);

        const images = response.results.map(
            data => `${IMAGE_POSTER_URL}${data.backdrop_path}`,
        );

        let backImages = [];
        for (let i = 0; i < 10; ++i) {
            backImages = [...backImages, images[i]];
        }

        setImages(backImages);


    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <View key={movies}>
            <SliderBox

                sliderBoxHeight={200}
                images={images} dotColor={Constant.secondaryColor}
                onCurrentImagePressed={index => props.navigation.push('MovieDetail',
                    { movieId: movies[index].id })}

            />
        </View>
    )
}

export default DiscoverMovie

const styles = StyleSheet.create({})