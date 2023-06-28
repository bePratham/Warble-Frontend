import { View,Text,Image,StyleSheet,Pressable,ImageBackground} from "react-native";
import {TweetType} from "../types";
import { Entypo } from '@expo/vector-icons';
import IconButton from "./IconButon";
import { Link } from "expo-router";
import tweets from'../assets/assets/data/tweets';

const tweet1 = tweets[0];

type TweetProps = {
    tweet: TweetType;
}
const Tweet=({ tweet }:TweetProps)=>{
    return (
      <Link href={`/feed/tweet/${tweet.id}`} asChild>
        <Pressable >
          <View style={{
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 10,
            margin:5
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}
          >
          
            
            {/* Image */}
            <View style={{ marginLeft:10, paddingVertical: 3 }}>
              <Image source={{ uri: tweet1.image }} style={styles.userImage} />
            </View>
            
            {/* Name & handle */}
            <View
              style={{ 
                flex: 1,
                marginLeft: 0,
                paddingVertical: 5,
                alignItems:'flex-start',
                justifyContent: 'center',
              }}
            >
              <Text >{tweet.content}</Text>
            </View>
            
            <View style={{ alignItems: 'center', justifyContent: 'center',paddingRight:5 }}>
              <Text style={styles.nameText}>{tweet1.user.name}</Text>
              <Text style={styles.handleText}>@varun</Text>
            </View>
            
        </View>
        <View style={styles.footer}>
              <IconButton icon="comment" text={tweet.numberOfComments}/>
              <IconButton icon="retweet" text={tweet.numberOfRetweets}/>
              <IconButton icon="heart" text={tweet.numberOfLikes}/>
              <IconButton icon="chart" text={tweet.impressions || 0}/>
              <IconButton icon="share-apple" />
        </View>

          </View>
        
       

        {/* <Image src = {tweet.user.image} style={styles.userImage}  />
       
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
              <IconButton icon="comment" text={tweet.numberOfComments}/>
              <IconButton icon="retweet" text={tweet.numberOfRetweets}/>
              <IconButton icon="heart" text={tweet.numberOfLikes}/>
              <IconButton icon="chart" text={tweet.impressions || 0}/>
              <IconButton icon="share-apple" />
            </View>
        </View> */}
      </Pressable>
      </Link>
    )
}
const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  userCard: {
    backgroundColor: 'gray',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',

    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 5,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    ...StyleSheet.absoluteFillObject,
  },content:{
    color:'white',
    fontSize: 16,
    marginTop: 10,
  },
  nameContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    alignItems: 'flex-end',
  },
  nameText: {
    
    fontSize: 22,
    fontWeight: '500',
  },
  handleText: {
   
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 3,
    marginRight: 20,
  },
  footer:{
            flexDirection:'row',
            marginVertical :1,
            marginLeft:100,
            justifyContent: 'space-between',
        }
});
// const styles = StyleSheet.create({
//     container: {
//       flexDirection:'row',
//       padding:10,
//       borderBottomWidth: StyleSheet.hairlineWidth,
//       borderBottomColor: 'lightgrey',
//       backgroundColor:'white'
//     },
//     userImage: {
//      width: 50,
//      height:50 ,
//      borderRadius:50 
//     },
  
//      mainContainer :{
//       marginLeft: 10,
//       flex:1,
//      },
//      name:{
//       fontWeight:'500',  
//      },
//      username: {
//     color:'gray',
//     marginLeft:5
//      },
//      content:{
//         lineHeight:20,
//         marginTop:5,
//       },
//       Image:{
//         width:'100%',
//         aspectRatio: 16/9,
//         marginVertical:10,
//         borderRadius:15,
//       },
//     footer:{
//         flexDirection:'row',
//         marginVertical :5,
//         justifyContent: 'space-between',
//     }
//   });
  export default Tweet;