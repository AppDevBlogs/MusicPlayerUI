import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import BannerComponent from '../Components/BannerComponent';
import CatogComponent from '../Components/CatogComponent';
import SongsComponent from '../Components/SongsComponent';
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Music App</Text>
        <ScrollView>
          <BannerComponent navigation={this.props.navigation} />
          <CatogComponent navigation={this.props.navigation} />
          <Text style={[styles.title, {marginTop: 0}]}>Songs</Text>
          <SongsComponent navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
});
