import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SongsCOmponent from './SongsComponent';

class CategoriesDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.route.params.item;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Surface style={styles.surface}>
            <Image source={data.img} style={styles.img} />
          </Surface>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.playContainer}>
            <Text style={styles.text}>Play All</Text>
            <TouchableOpacity style={styles.btn}>
              <Icon name="play" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.text2}>Songs</Text>
        <SongsCOmponent navigation={this.props.navigation} />
      </View>
    );
  }
}

export default CategoriesDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  surface: {
    height: 220,
    width: 220,
    elevation: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    height: 220,
    width: 220,
  },

  title: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
  },
  playContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    paddingTop: 10,
  },
  text: {
    fontSize: 24,
    marginRight: 20,
    color: '#000',
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ff5b77',
    elevation: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    fontSize: 18,
    color: '#333333',
    margin: 10,
    fontWeight: 'bold',
  },
});
