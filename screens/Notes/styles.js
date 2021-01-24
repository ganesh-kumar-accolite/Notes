import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#FFDB58',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20
    },
    adder: {
       
        position: 'absolute',
        marginLeft:80,
        marginRight:5,
        right: 0,
        bottom: 10
    },
    listTitle: {
        fontSize: 20
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor:"#e1ad01"
      },
      button:{
        backgroundColor: "gray",
        padding: 20,
        borderRadius: 50,
        marginLeft:250,
        marginRight:5,
        alignSelf: 'flex-start'
      },
      delete:{
          backgroundColor:"#008000",
          alignSelf: "center"
      }
})

export default styles;