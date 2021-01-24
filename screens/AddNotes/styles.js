import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFDB58',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: "center",
       
    },
    
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',

        flex: 1
    },
    title: {
        fontSize: 24,
        margin:10,
        height:40,
        width: 340,
        borderWidth:2,
        borderColor:'gray',
       
    },
    text: {
        height: 300,
        width: 340,
        margin:10,
        fontSize: 16,
        borderWidth:2,
        borderColor:'gray',
        justifyContent:'space-evenly',
        alignItems:'baseline'      
    },
    Button : {
        marginRight:1000
    },
    textLabel:{
        fontSize:20
    },
    button:{
        justifyContent:"center",
        backgroundColor: "gray",
        padding: 20,
        borderRadius: 50,
        alignSelf: "center"
    }
})


export default styles;