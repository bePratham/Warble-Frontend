import { View,Text,Image,StyleSheet} from "react-native";
import {TweetType} from "../types";
import { Entypo,EvilIcons } from '@expo/vector-icons';
const IconButton =()=>{
    return(
        <>
        
        </>
    )
}

type TweetProps = {
    tweet: TweetType;
}
const Tweet=({ tweet }:TweetProps)=>{
    return (
        <View style={styles.container}>
        <Image src={tweet.user.image} style={styles.userImage}  />
       
        <View style={styles.mainContainer}> 
           <View style={{flexDirection:'row'}}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>{tweet.user.username} ·2h</Text>
          <Entypo 
          name="dots-three-horizontal" 
          size={16} color="black" 
          style={{marginLeft:'auto'}}
          />
          </View>
          <Text style={styles.content}>{tweet.content}</Text>

          {tweet.image && <Image src={tweet.image} style={styles.Image}/>}
            <View style={styles.footer}>
                    <View  style={{flexDirection:'row'}}>
                        <EvilIcons  name="comment"size={22} color="gray" />
                        <Text style={{fontSize:12 ,color:'gray'}}>123 </Text>
                    </View>
            </View>

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
     username: {
    color:'gray',
    marginLeft:5
     },
     content:{
        lineHeight:20,
        marginTop:5,
      },
      Image:{
        width:'100%',
        aspectRatio: 16/9,
        marginVertical:10,
        borderRadius:15,
      },
    footer:{
        flexDirection:'row',
        marginVertical :5,
    }
  });
  export default Tweet;