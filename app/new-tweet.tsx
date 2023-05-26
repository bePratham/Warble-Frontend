import { View,StyleSheet,Text,Image,
         TextInput, Pressable, ActivityIndicator } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTweet } from "../lib/api/tweets";
const user = {
    id: 'u1',
    username: 'VadimNotJustDev',
    name: 'Vadim',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
  }

export default function NewTweet(){

    const[text,setText] = useState("");
    const router = useRouter();

    const QueryClient=useQueryClient();

    const {mutateAsync,isLoading,isError,error }=useMutation({
        mutationFn: createTweet,
        onSuccess:()=>{
            QueryClient.invalidateQueries({ queryKey:['tweets']})
        }
    })
    const onTweetPress = async()=>{
        console.warn("posting that tweet",text);
        try{
            await mutateAsync({content:text});
        setText('');
        router.back();
        }
       catch(e){
        // @ts-ignore
        console.log("Error : ",e.message);
       }
    }
    return(
<SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <View style={styles.container}>
        <View style = {styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 18 }}>  Cancel </Link>
            {isLoading && <ActivityIndicator/>}
          <Pressable onPress={onTweetPress} style={styles.button}> 
                <Text style={styles.buttonText}>
                    Tweet 
                </Text> 
            </Pressable>
        </View>
        
        <View style={styles.inputContainer}>
            <Image src = {user.image} style = {styles.image}  />
            <TextInput 
            value={text}
            onChangeText={setText}
            placeholder="What's happening?" 
            multiline 
            numberOfLines={10}
            style={{ flex:1 }}
            />
        </View>
        {isError && <Text>Error: {error.message}</Text>}
     </View>
</SafeAreaView>
    
    )
}


const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    container:{
        padding:10,
        backgroundColor:'white',
        flex:1
    },
    image:{
        width:45,
        aspectRatio:1,
        borderRadius:50,
        marginRight: 10
    },
    buttonContainer:{
        flexDirection:'row',
        marginVertical:10,
        justifyContent:'space-between',
        alignItems:'center'
       
    },
    button:{
        backgroundColor:'#1c9bf0',
        padding:10,
        paddingHorizontal:20,
        borderRadius:50
    },
    buttonText:{
        color:'white',
        fontWeight:'600',
        fontSize:16
    }
});