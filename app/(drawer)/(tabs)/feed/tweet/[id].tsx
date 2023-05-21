import Tweet from "../../../../../components/Tweet"
import { Text } from "react-native";
import tweets from "../../../../../assets/assets/data/tweets";
import { useSearchParams } from "expo-router";
export default function TweetScreen(){
    const{id} = useSearchParams();
    console.warn(id);
    const tweet = tweets.find(t => t.id === id);
    if(!tweet){
        return <Text> Tweet {id} not Found!</Text>
    }
    return <Tweet tweet={tweet} />
};

