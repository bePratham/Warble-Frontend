import { StyleSheet,
        Image,
        FlatList,
         Pressable,
         } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Tweet from '../../../../components/Tweet';
import { Entypo } from '@expo/vector-icons';
import {Link} from 'expo-router';
// import { useEffect, useState } from 'react';
import  {listTweets}  from '../../../../lib/api/tweets';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator } from 'react-native';
export default function FeedScreen() {
  const { data, isLoading, error }=useQuery({
    queryKey:['tweets'],
    queryFn:listTweets,
  });
  if(isLoading){
    return <ActivityIndicator/>;
  }
  if(error){
    //@ts-ignore
    return <Text>{error.message} </Text>
  }
  return (
    <View style={styles.page}> 
      <FlatList 
      data={data}
       renderItem={({item})=> <Tweet tweet={item}/>}
      />
              <Link href="/new-tweet" asChild>
                <Entypo 
                name="plus" 
                size={24} 
                color="white" 
               style= {styles.floatingButton}
                />
              </Link>
         </View >
  );
}
const styles = StyleSheet.create({
  page:{
    flex: 1,
    backgroundColor: 'white',
  },
  floatingButton:{
    backgroundColor:'#1c9bf0',
    width:50,
    height:50,
    borderRadius:25,
    lineHeight:50,
    textAlign:'center',
    position:'absolute',
    right:15,
    bottom:15,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,
overflow:'hidden'

  }
})
