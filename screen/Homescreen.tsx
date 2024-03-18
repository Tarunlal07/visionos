import React, {useEffect, useState} from 'react';
import {
  useWindowDimensions,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Modal,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';


const HomeScreen = () => {
    const [posts, setPosts] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const {width: screenWidth} = useWindowDimensions();
  
    useEffect(() => {
      fetch('https://www.reddit.com/r/pic/top.json?t=year')
        .then(response => response.json())
        .then(json => {
          const posts = json.data.children.map(child => child.data);
          setPosts(posts);
        });
    }, []);
    
    return (
      <ScrollView>
        <View style={[styles.imageContainer, {maxWidth: screenWidth}]}>
          {posts.map(post => (
            <View style={styles.tileContainer} key={post.id}>
              <TouchableOpacity
                style={styles.highlight}
                onPress={() => {
                  setModalVisible(true);
                  setSelectedImage(post.url);
                }}>
                <Image style={styles.tile} source={{uri: post.thumbnail}} />
              </TouchableOpacity>
              {/* <Text style={styles.title}>{post.title}</Text> */}
            </View>
          ))}
        </View>
        <Modal
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <TouchableHighlight
            activeOpacity={1}
            onPress={() => setModalVisible(false)}>
            <Image
              source={{uri: selectedImage}}
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
            />
          </TouchableHighlight>
        </Modal>
      </ScrollView>
    );
  };
  
  
  const styles = StyleSheet.create({
      imageContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      tileContainer: {
        width: '19%',
        marginHorizontal: 5,
      },
      tile: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 10,
      },
      title: {
        fontSize: 16,
        marginTop: 6,
        textAlign: 'center',
        color:'white'
      },
      highlight: {
        borderRadius: 10,
        overflow: 'hidden',
      },
    });
  
  export default HomeScreen;
  