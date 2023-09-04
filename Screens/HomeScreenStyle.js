import { Platform } from "react-native";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'#282928',
        padding:20
    },
    top_container:{
        top:50,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        gap:40,
    },
    nav_container:{
        backgroundColor:'#000',
        borderRadius:100,
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        ...Platform.select({
            ios: {
              shadowColor: '#ccc',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation:10,
            },
            android: {
              elevation: 10,
              shadowColor: '#ccc',
            },
          }),
    },
    title:{
        color:'#c0c4c1',
        top:12,
        fontSize:22
    },
    icons:{
        display:'flex',
        color:'#c0c4c1',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:8
    },
    middle_container:{
        display:'flex',
        alignItems:'center',
        marginTop:100
    },
    ImageConatiner:{
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        height:310,
        width: 310,
        borderRadius:150,
        elevation: Platform.OS === 'android' ? 2 : 0,
    },
    image:{
        borderRadius:150,
        marginTop:6,
        marginLeft:5,
        height:300,
        width:300,
        
    },
    song_title:{
        fontSize:26,
        color:'#d6d6d6',
        marginTop:30,
        marginBottom:15,
    },
    song_subtitle:{
        color:'#989c99',
        fontSize:22,
    },
    slider: {
        width: '100%',
        marginTop: 1,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap:270,
        marginTop: 40,
    },
    timeText: {
        color: '#989c99', 
    },
    totalTimeText:{
        color: '#989c99', 
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap:80,
        marginTop: 100,
    },
    actionContainer:{
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center',
        height:60,
        width:60,
        borderRadius:100,
        elevation:4,
        shadowColor:'#ccc',
    },
    actionPauseContainer:{
        backgroundColor:'#FF4500',
        alignItems:'center',
        justifyContent:'center',
        height:60,
        width:60,
        borderRadius:100,
        elevation:4,
        shadowColor:'#ccc',
    }
})

export default Styles;