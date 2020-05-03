import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
class ProfileComponent extends Component {
  constructor(props) {
    super(props);
  }

  renderOption = (icon, name, count) => {
    return (
      <View style={styles.options}>
        <View style={styles.left}>
          <Icon name={icon} size={30} color="#000" />
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.left}>
          <Text style={styles.title}>{count}</Text>
          <Icon2
            name="ios-arrow-forward"
            size={30}
            color="gray"
            style={{marginLeft: 20}}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Surface style={styles.surface}>
            <Image
              source={require('../Assets/icon_black.png')}
              style={styles.profile}
            />
          </Surface>
          <View style={styles.dataContainer}>
            <Text style={styles.name}>AppDevBlog</Text>
            <Text style={styles.uname}>appdevblog_100100</Text>
            <Text style={styles.uname}>10 Jan 2000</Text>
          </View>
        </View>
        <View style={styles.divider} />
        {this.renderOption('music', 'Songs', 20)}
        {this.renderOption('playlist-music', 'Playlist', 25)}
        {this.renderOption('album', 'Albums', 10)}
        {this.renderOption('download', 'Downloads', 10)}
        <View style={styles.divider} />
      </View>
    );
  }
}

export default ProfileComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    padding: 10,
    flexDirection: 'row',
  },

  surface: {
    height: 80,
    width: 80,
    borderRadius: 75,
    elevation: 15,
    overflow: 'hidden',
  },
  profile: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  dataContainer: {
    paddingLeft: 10,
  },
  name: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  uname: {
    fontSize: 18,
    color: 'gray',
  },
  divider: {
    height: 10,
    backgroundColor: '#e5e5e5',
  },
  options: {
    height: 55,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  left: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    marginLeft: 15,
  },
});
