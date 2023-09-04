import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({

    main_container:{
        backgroundColor:'#282928',
        height:'100%',
        width:'100%'
    },
    top_container:{
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'space-between',
    },
    song_title:{
        color: '#c0c4c1' ,
        fontSize :22, 
        fontWeight:"bold",
        marginTop:50
    },
    middle_container:{
        display:'flex',
        marginTop:130,
        flexDirection:'row',
        justifyContent:"space-between",
        gap:40,
    },
    icon_container:{
        backgroundColor:'#000',
        borderRadius:100,
        shadowColor:'#ccc',
        elevation:10,
        top:-10,
        alignItems:'center',
        justifyContent:'center',
        height:50,
        width:50,
    },
    icon:{
        color:'#c0c4c1'
    },
    image_container:{
        height:170,
        width:170,
        top:-70,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:150,
        shadowColor:'#ccc',
        elevation:2,
    },
    image:{
        width:150,
        position:'absolute',
        height:150,
        borderRadius:100,
        top:10
    },
    scroll:{
        height:800,
    },
    song_list_container:{
        marginBottom:50,
        height:'100%',
        overflow:'scroll'
    },
    songItem:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        gap:180,
        margin:20,
        marginBottom:25,
    },
    song_name:{
        fontSize: 20,
        color:'#c0c4c1'
    },
    // btn_container:{
    //     backgroundColor:'#000',
    //     borderRadius:100,
    //     shadowColor:'#ccc',
    //     elevation:10,
    //     top:-10,
    //     alignItems:'center',
    //     justifyContent:'center',
    //     height:50,
    //     width:50,
    // },
    btn_container:{
        backgroundColor:'#FF4500',
        alignItems:'center',
        justifyContent:'center',
        height:60,
        width:60,
        borderRadius:100,
        top:-10,
        elevation:4,
        shadowColor:'#ccc',
    },
    Bottom:{
        marginTop:40,
        marginBottom:40
    }
    
})

export default Styles;