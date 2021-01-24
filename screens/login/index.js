import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Styles from "./styles";
import { Text, TextInput, View,  Button } from "react-native";

const Login = ({navigation}) =>{

const [username,setUserName] = useState("");

useEffect(()=>{
    checkAuth()
    },[])

const checkAuth=()=>{
    const username = AsyncStorage.getItem("username");
    if(username)
     {
       navigation.navigate("Notes List");
     }
     else{
       navigation.navigate("Login");
     }
}



const login=async()=>{
await AsyncStorage.setItem("username",username);
navigation.navigate("Notes List");
}

return (
    
         <View style={Styles.container}>
            
            <Text style={Styles.textLabel}>User Name</Text> 
            <TextInput style={Styles.textInputStyle} onChangeText={(username) => setUserName(username)} placeholder="Username" />
            <Text style={Styles.textLabel}>Password</Text> 
            <TextInput secureTextEntry={true} style={Styles.textInputStyle} placeholder="Password" />
            <Button color="#008000" title="Log in" onPress={login} />
        </View>     
   
)
}

export  {Login};