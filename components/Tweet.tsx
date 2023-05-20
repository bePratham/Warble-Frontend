import { View,Text,Image,StyleSheet} from "react-native";
import tweets from "../assets/assets/data/tweets";
import {TweetType} from "../types";



type TweetProps = {
    tweet: TweetType;
}


const Tweet=({ tweet }:TweetProps)=>{
    return (
        <View style={styles.container}>
        <Image src={tweet.user.image} style={styles.userImage} 
        />
        <View style={styles.mainContainer}>
          <Text>{tweet.user.name}</Text>
          <Text>{tweet.content}</Text>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      padding:10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'lightgrey',
      backgroundColor:'white'
    },
    userImage: {
     width: 50,
     height:50 ,
     borderRadius:50 
    },
  
     mainContainer :{
      marginLeft: 10,
      flex:1,
     },
     name:{
      fontWeight:'500',
      
     },
     content:{
        lineHeight:20,
        marginTop:5,
      }
  });
  export default Tweet;