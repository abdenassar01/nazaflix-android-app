import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,ScrollView } from 'react-native';
import Row from './Row'
import Banner from './Banner'

import requests from './requests'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Banner />
      <Row style={styles.row} title="Netflix Originals" fetchUrl={requests.NeflixOriginals} />
      <Row style={styles.row} title="Top Rated" fetchUrl={requests.TopRated} /> 
      <Row style={styles.row} title="Trending" fetchUrl={requests.Trending} /> 
      <Row style={styles.row} title="Romance Movie" fetchUrl={requests.RomanceMovie} />
      <Row style={styles.row} title="Action Movie" fetchUrl={requests.ActionMovie} />
      <Row style={styles.row} title="Kids Movie" fetchUrl={requests.KidsMovie} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  row: {
    height: 50,
  },
  
});
