import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => {
      return blogPost._id === navigation.getParam('id')
    }
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" size={35} color="white"/>
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  container:{
    marginTop:10,
    marginLeft:10
  },
  title:{
    fontSize:30,
    marginBottom:20
  },
  content:{
    fontSize:20
  }
});

export default ShowScreen;
