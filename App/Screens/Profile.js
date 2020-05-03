import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ProfileComponent from '../Components/ProfileComponent';
import {ScrollView} from 'react-native-gesture-handler';
import SongsComponent from '../Components/SongsComponent';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <ScrollView>
          <ProfileComponent />
          <Text style={[styles.title, {marginTop: 10, fontSize: 18}]}>
            History
          </Text>
          <SongsComponent navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

export default Profile;

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
