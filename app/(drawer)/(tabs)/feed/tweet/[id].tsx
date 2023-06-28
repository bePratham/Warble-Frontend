import Tweet from "../../../../../components/Tweet"
import { ActivityIndicator, Text } from "react-native";
import tweets from "../../../../../assets/assets/data/tweets";
import { useSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { useTweetsApi } from "../../../../../lib/api/tweets";
import UserProfileHeader from "../../../../../components/userProfile";

export default function TweetScreen(){


    const{id} = useSearchParams();
    const { getTweet}  = useTweetsApi(); 
    const { data , isLoading , error } = useQuery({
        queryKey: ['tweet',id],
        queryFn: ()=> getTweet(id as string),

    });
    if(isLoading){
        return <ActivityIndicator />;
    }
    if(error){
        return <Text> Tweet {id} not found</Text>
    }
   
    return <UserProfileHeader tweet={data} />
};

