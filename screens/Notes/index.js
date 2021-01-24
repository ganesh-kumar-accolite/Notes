import React , {useEffect, useState} from  'react';
import {Text,View,FlatList,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { AddNotes } from '../AddNotes';
import styles from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";

function ViewNotes({navigation}) {

const [notes,setNotes] =useState([]);
//const [username, setusername] = useState('');
useEffect(()=>{
    AsyncStorage.setItem("Notes",notes);
},[notes]);
//AsyncStorage.getItem('username').then(
  //  (value) =>
    //  setusername(value),
 // );
const addNote= (note)=>{
note.id=notes.length+1;
setNotes([...notes,note])
}
const deleteNote =(note) =>{
console.log(note);
setNotes(notes.filter((list)=> list.id !== note.id));
}

 return(

     <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate("Notes",{addNote:addNote})} style={styles.button}>
    <Text >+ Add Note</Text>
    </TouchableOpacity>
      { 
      notes.length === 0 ?(<View style={styles.titleContainer}>
      <Text style={styles.title}> No Notes</Text>
      </View>) : (
        <FlatList data={notes}  
        renderItem= {({item}) =>{ return(
            <View>
            <Text style={styles.sectionHeader}>{item.noteTitle}</Text>
            <Text style={styles.item}>{item.noteDesc}</Text>
            <TouchableOpacity onPress={()=>{deleteNote(item)}} style={styles.delete}>
            <Text style={styles.sectionHeader}>Delete Note</Text>
            </TouchableOpacity>
            </View>
        )
        }
        }
        />
      )
      }
      
      
     </View>
 );
}

export  {ViewNotes};