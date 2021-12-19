import { useState, useEffect } from 'react'
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native'
import instance from './axios';

const Row = ({ title, fetchUrl}) => {

    const baseUrl = "https://image.tmdb.org/t/p/original";
    const [ movies, setMovies ] = useState([]);
    
    useEffect(() => {
        const fetchMoviesAsync_ = async () => {
            const result = await instance.get(fetchUrl);
            setMovies(result.data.results);            
            return result;
        }

        fetchMoviesAsync_();
    },[fetchUrl]);

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <ScrollView horizontal={true} >
                {movies.map(movie => 
                    <Image
                        style={styles.poster}
                        key={movie.id}
                        source={{
                        uri: `${baseUrl}${movie.poster_path}`,
                        }}
                    />)}
            </ScrollView>
        </View>
    )
}

export default Row


const styles = StyleSheet.create({
   
    title: {
      paddingTop: 10,
      fontSize: 25,
      color: "#f7f7f7",
    },
    poster: {
        marginTop: 10,
        marginLeft: 10,
        width: 100,
        height: 150,
        borderRadius: 5,
    }
    
  });