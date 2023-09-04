import React from 'react';
import {View,Text,FlatList,StyleSheet} from 'react-native'


function SongList({songs}) {
    return(
        <View style={Styles.container}>
            <FlatList 
                data={songs}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({item}) => (
                    <View style={Styles.songItem}>
                        <Text>{item}</Text> 
                    </View>
                )}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    songItem: {
      padding: 12,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
  });
  
  export default SongList;