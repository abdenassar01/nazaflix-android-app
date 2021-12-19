import { useState, useEffect } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import instance from './axios'
import requests from './requests'

const Banner = () => {

    const [randomMovie, setrandomMovie] = useState([]);

    useEffect( () => {
        try{
            const fetchMovieAsync_ = async () => {
                const result = await instance.get(requests.NeflixOriginals);
                setrandomMovie(result.data.results[Math.floor(Math.random() * ( result.data.results.length + 0 + 1) ) + 0]); 
                return result;
            }
            fetchMovieAsync_();
        }catch(e){
            console.error(e)
        }
        
    },[]);

    const baseUrl = "https://image.tmdb.org/t/p/original";

    return (
        // <View style={styles.banner} >
            <ImageBackground 
                source={{ 
                        uri: `${baseUrl}${randomMovie?.poster_path || randomMovie?.backdrop_path}`,
                    }} 
                resizeMode="cover" 
                style={styles.image}
            >
                    <Text style={styles.title}>{randomMovie?.title || randomMovie?.name || randomMovie?.original_name}</Text>
                    <Text style={styles.text}>{randomMovie?.overview}</Text>   
             </ImageBackground>
        // </View>
    )
}

export default Banner


const styles = StyleSheet.create({
   
    text: {
      paddingTop: 10,
      marginLeft: 10,
      fontSize: 14,
      color: "#ffffff",
      maxWidth: 300,
    },

    title: {
        marginTop: 200,
        marginLeft: 10,
        fontSize: 25,
        color: "#ffffff",
        fontWeight: "bold",
    },
    image: {
        flex: 1,
        height: 400,
    } 
  });