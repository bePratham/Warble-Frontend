
import { useSegments,useRouter } from "expo-router";
import { PropsWithChildren, createContext ,useState,useContext,useEffect} from "react";
import * as SecureStore from "expo-secure-store";
const AuthContext= createContext({});

const AuthContextProvider=({children}:PropsWithChildren)=>{
    const [authToken,setAuthToken]=useState<string|null>(null);
    const segments=useSegments();
    const router = useRouter();
    useEffect(()=>{
        const isAuthGroup = segments[0]==='(auth)';
        if(!authToken && !isAuthGroup){
            console.warn('User is not yet authenticated and he cannot see this page.');
            router.replace('/signIn');
        } if(authToken&& isAuthGroup){
            router.replace('/');
        }
    },[segments,authToken]);
    useEffect(()=>{
        const loadAuthToken=async()=>{
            const res= await SecureStore.getItemAsync('authToken');
            if(res){
                setAuthToken(res);
            }
            
        }
        loadAuthToken();
    })
    const updateAuthToken=async (newToken:string)=>{
        setAuthToken(newToken);
        await SecureStore.setItemAsync('authToken',newToken);
        setAuthToken(newToken);
    }
    return(
        <AuthContext.Provider value={{authToken,updateAuthToken}}>
        {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;
export const useAuth=()=>useContext(AuthContext);