import { API_URL } from "./config";
import { PropsWithChildren,createContext ,useCallback,useContext, useEffect, useState} from 'react';
import { useAuth } from "../../context/AuthContext";

const TweetsApiContext=createContext({});
const TweetsApiContexProvider=({children}:PropsWithChildren)=>{
    const {authToken}=useAuth();
 

 const listTweets =async () => {
  if(!authToken){
    return; 
  }
  const res = await fetch(`${API_URL}/tweet`,{
    headers:{
      Authorization:`Bearer ${authToken}`
    }
  });
  if(res.status === 401){
    throw new Error("Not authorized.Please sign in");
   }
  if(res.status !== 200){
   throw new Error("Error fetching tweets");
  }
    return await res.json(); 
  };
 const getTweet=async(id:string)=>{
      const res=await fetch(`${API_URL}/tweet/${id}`,{
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
       if(res.status === 401){
          throw new Error('Not authorized .Please Sign in');
        }
        if(res.status!==200){
          throw new Error("Error in fetching tweet");
        }
       
        return await res.json();
    }


 const createTweet = async(data:{content : string}) => {
      const res=await fetch(`${API_URL}/tweet`,{
        method:'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
       if(res.status === 401){
          throw new Error('Not authorized .Please Sign in');
        }
        if(res.status!==200){
          console.log(res);
          throw new Error("Error creating tweet");
        }; 
        return await res.json();
};
  return (<TweetsApiContext.Provider value={{
     listTweets:()=>  listTweets(authToken),
    getTweet,
    createTweet,
  } }>
{children}
  </TweetsApiContext.Provider>)
};
export default  TweetsApiContexProvider;
export const useTweetsApi=()=>useContext(TweetsApiContext);