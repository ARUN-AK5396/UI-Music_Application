import {View , Text , TouchableOpacity , Image,ScrollView} from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'
import IconPlay from 'react-native-vector-icons/MaterialIcons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from './MenuScreenStyle'
import SongList from './SongList';

const MenuScreen = () => {

    const navigation = useNavigation();

    const [selectedSongIndex, setSelectedSongIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const songList = [
        'Aint No Time',
        'In her Mouth',
        'Low Life',
        'Xanny Family',
        'Lil Haiti Baby',
        'Photo Copied',
        'Seven Rings',
        'Lie to Me',
    ];

    const togglePlay = (index) => {
        const updatedIsPlaying = [...isPlaying];
        updatedIsPlaying[index] = !updatedIsPlaying[index];
        setIsPlaying(updatedIsPlaying);
    };

    return (
        <View style={Styles.main_container}>
            <View style={Styles.top_container}>
                <Text style={Styles.song_title}>Low Life</Text>
                <View style={Styles.middle_container}>
                    <TouchableOpacity style={Styles.icon_container}>
                        <Icon style={Styles.icon} name="heart" size={25}/>
                    </TouchableOpacity>
                    <View style={Styles.image_container}>
                        <Image style={Styles.image} source={require('../../assets/black_rose.png')} />
                    </View>
                    <TouchableOpacity style={Styles.icon_container}>
                    <MaterialCommunityIcons style={Styles.icon} name="dots-horizontal" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={Styles.song_list_container}>
                <ScrollView style={Styles.scroll}>
            {songList.map((song, index) => (
              <View
                key={index}
                style={[
                  Styles.songItem,
                  selectedSongIndex === index && Styles.selectedSongItem,
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    setSelectedSongIndex(index);
                    togglePlay(index);
                  }}
                >
                  <Text
                    style={[
                      Styles.song_name,
                      selectedSongIndex === index && Styles.selectedSongName,
                    ]}
                  >
                    {song}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btn_container}>
                  {isPlaying[index] ? (
                    <IconPlay name="pause" size={35} color="#c0c4c1" />
                  ) : (
                    <IconPlay name="play-arrow" size={35} color="#c0c4c1" />
                  )}
                </TouchableOpacity>
              </View>
            ))}
            <View style={Styles.Bottom}>
              <Text>..</Text>
            </View>
          </ScrollView>
                    
                </View>
            </View>
        </View>
    )    
}

export default MenuScreen;