import React from 'react';
import { useState } from 'react';
import {View,Text, TextInput,TouchableOpacity} from 'react-native';
import styles from './styles';

function AddNotes({navigation,route}){

 const [noteTitle,setTitle] = useState('');
 const [noteDesc,setNote] = useState('');
 function SaveNote(){

  route.params.addNote({noteTitle,noteDesc});
  navigation.goBack();
 }

 return(    
    <View style={styles.Container}>
          <Text style={styles.textLabel}>Title</Text>
        <TextInput  value={noteTitle}  style={styles.title} onChangeText={setTitle}/>
        <Text style={styles.textLabel}>Description</Text>
        <TextInput   value={noteDesc}  multiline={true}  scrollEnabled={true} style={styles.text} onChangeText={setNote}></TextInput>
        <TouchableOpacity onPress={SaveNote} style={styles.button}>
         <Text >Add</Text>
         </TouchableOpacity>
   </View>
   );   
}
export  {AddNotes};