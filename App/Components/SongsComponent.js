import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');
import {Surface} from 'react-native-paper';

class SOngData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  playSong = item => {
    this.props.navigation.navigate('Player', {item: item});
  };

  openModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  render() {
    let item = this.props.item;
    return (
      <View>
        <Modal
          transparent={true}
          onRequestClose={() => this.closeModal()}
          visible={this.state.modalVisible}
          animationType="slide">
          <View style={{height: '100%', backgroundColor: 'rgba(0,0,0,0.4)'}}>
            <View style={styles.modal}>
              <Surface style={styles.surface}>
                <Image source={item.img} style={styles.modalImg} />
              </Surface>

              <View style={styles.modalData}>
                <View style={styles.playerContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subTitle}>{item.subTitle}</Text>
                  <TouchableOpacity style={styles.btn}>
                    <Icon name="play" size={30} color="#fff" />
                  </TouchableOpacity>
                </View>
                <View style={styles.option}>
                  <Icon name="heart" size={30} color="#ff5b77" />
                  <Text style={styles.text}>Add To Favourite</Text>
                </View>
                <View style={styles.option}>
                  <Icon name="playlist-plus" size={30} color="#000" />
                  <Text style={styles.text}>Add To Playlist</Text>
                </View>
                <View style={styles.option}>
                  <Icon name="album" size={30} color="#000" />
                  <Text style={styles.text}>Create Album</Text>
                </View>
                <View style={styles.option}>
                  <Icon name="download" size={30} color="#000" />
                  <Text style={styles.text}>Download</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableWithoutFeedback
          style={styles.songContainer}
          onPress={() => this.playSong(item)}>
          <View style={{flexDirection: 'row'}}>
            <Image source={item.img} style={styles.img} />
            <View style={styles.dataContainer}>
              <Text style={styles.songtitle}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.subTitle}</Text>
              <Text style={styles.subTitle}>{item.duration / 60}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon
                name="download"
                color="gray"
                size={30}
                style={{marginRight: 10}}
              />
              <TouchableOpacity onPress={() => this.openModal()}>
                <Icon name="dots-vertical" color="gray" size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

class SongsComponent extends Component {
  constructor(props) {
    super(props);
  }

  separator = () => {
    return <View style={{height: 10, backgroundColor: '#fff'}} />;
  };

  render() {
    let songs = [
      {
        title: 'Believer',
        subTitle: 'Imagine Dragons',
        duration: 201.6,
        img: require('../Assets/s1.jpg'),
      },
      {
        title: 'Hall Of Fame',
        subTitle: 'The Script',
        duration: 201.6,
        img: require('../Assets/s2.jpg'),
      },
      {
        title: "It's My Life",
        subTitle: 'Dr. Alban',
        duration: 201.6,
        img: require('../Assets/s3.jpg'),
      },
      {
        title: 'Not Afraid',
        subTitle: 'Eminem',
        duration: 201.6,
        img: require('../Assets/s4.jpg'),
      },
      {
        title: 'I Will Survive',
        subTitle: 'Gloria Gaynor',
        duration: 201.6,
        img: require('../Assets/s5.jpeg'),
      },
    ];
    return (
      <View style={styles.container}>
        <View style={{padding: 10, paddingTop: 0}}>
          <FlatList
            data={songs}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => this.separator()}
            renderItem={({item, index}) => {
              return (
                <SOngData item={item} navigation={this.props.navigation} />
              );
            }}
          />
        </View>
      </View>
    );
  }
}

export default SongsComponent;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  songContainer: {
    width: width,
    height: 70,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 5,
  },
  dataContainer: {
    paddingLeft: 10,
    width: width - 160,
  },
  songtitle: {
    fontSize: 18,
    color: '#000',
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modal: {
    height: '55%',
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  modalImg: {
    height: 180,
    width: 180,
  },
  surface: {
    height: 180,
    width: 180,
    alignSelf: 'center',
    position: 'absolute',
    overflow: 'hidden',
    top: -100,
    borderRadius: 20,
    elevation: 20,
  },
  modalData: {
    marginTop: 100,
  },
  option: {
    height: 50,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e5e5',
  },
  text: {
    marginLeft: 15,
    color: '#000',
    fontSize: 20,
  },
  playerContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
});
