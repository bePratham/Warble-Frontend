import { StyleSheet,Image,FlatList, Pressable } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Tweet from '../../../../components/Tweet';
import tweets from '../../../../assets/assets/data/tweets';
import { Entypo } from '@expo/vector-icons';
import {Link} from 'expo-router';
import { useEffect, useState } from 'react';

export default function TabOneScreen() {
  const [tweet,setTweet]=useState([]);
  useEffect(()=>{
    const fetchTweets=async()=>{
      const url="http://localhosth:3000/tweet";
      const authToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoyOX0.CaseFX_wSBrSZJCDmMk7QDsfZAf38oNi35-k2R6UTqo';
      const res=await fetch(url,{
          headers:{
              Autherization:`Bearer ${authToken}`
        }
      }
    );
        if(res.status!==200){
          console.log("Error in fetching the api");
        }
        const data= await res.json();
        console.log(data);
        setTweet(data);
    };
    fetchTweets();
  },[]);
  return (
    <View style={styles.page}>
      <FlatList 
      data={tweets}
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
