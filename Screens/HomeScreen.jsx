import {View,Text,TouchableOpacity,Image , Button} from 'react-native'
import React,{useState,useEffect} from 'react'
import Slider from '@react-native-community/slider'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Arrow from 'react-native-vector-icons/FontAwesome'
import MenuScreen from './Menu/MenuScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {useNavigation} from '@react-navigation/native'
import Styles from './HomeScreenStyle'

const HomeScreen = () => {
  const navigation = useNavigation();

   const [currentTime , setCurrentTime] = useState(0);
   const [totalDuration , setTotalDuration] = useState(240);
   const [isPlaying, setIsPlaying] = useState(false);

   useEffect(() => {
      let interval;
      if (isPlaying) {
        interval = setInterval(() => {
          if (currentTime < totalDuration) {
            const newTime = currentTime + 1;
            const newMinutes = Math.floor(newTime / 60);
            const newSeconds = newTime % 60;
            setCurrentTime(newTime);
            if (newTime > totalDuration) {
              setTotalDuration(newTime);
            }
          } else {
            clearInterval(interval);
            setIsPlaying(false);
          }
        }, 1000); 
      } else {
        clearInterval(interval);
      }
    
      return () => clearInterval(interval);
    }, [isPlaying, currentTime, totalDuration]);
    
   const onSliderChange = (value) => {
      setCurrentTime(value)

   }
   const formatTime = (timeInSeconds) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const togglePlayPause = () => {
      setIsPlaying(!isPlaying);
    };
  return (
    <View style={Styles.container}>
       <View style={Styles.top_container}>
          <TouchableOpacity style={Styles.nav_container} onPress={()=> navigation.navigate('Menu')}>
             <Arrow style={Styles.icons} name='angle-left' size={30}  />
          </TouchableOpacity>
          <Text style={Styles.title}>Playing Now</Text>
          <TouchableOpacity style={Styles.nav_container}>
             <Icon style={Styles.icons} name='menu' size={30} />
          </TouchableOpacity>
       </View>
       <View style={Styles.middle_container}>
          <View style={Styles.ImageConatiner}>
            <Image style={Styles.image} source={require('../assets/black_rose.png')} />   
          </View>
          <Text style={Styles.song_title}>Lonely Life</Text>
          <Text style={Styles.song_subtitle}>Future ft. The Weekend</Text>

          <View style={Styles.timeContainer}>
            <Text style={Styles.timeText}>{formatTime(currentTime)}</Text>
            <Text style={Styles.totalTimeText}>04:00</Text>
         </View>

          <Slider 
             style={Styles.slider}
             value={currentTime}
             minimumValue={0}
             maximumValue={totalDuration}
             onValueChange={onSliderChange}
             minimumTrackTintColor="#FF4500"
             maximumTrackTintColor="#000"    
             thumbTintColor="#FF4500"  
          />
         
      <View style={Styles.controlsContainer}>
         <TouchableOpacity style={Styles.actionContainer}>
            <Icon name='skip-previous' size={35} color={'#989c99'} />
         </TouchableOpacity>
         <TouchableOpacity style={Styles.actionPauseContainer} onPress={togglePlayPause}>
          {isPlaying ? (
            <Icon name="pause" size={35} color="#fff" />
          ) : (
            <Icon name="play-arrow" size={35} color="#fff" />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={Styles.actionContainer}>
            <Icon name='skip-next' size={35} color={'#989c99'} />
         </TouchableOpacity>
      </View>
       </View>
    </View>
  )
}

export default HomeScreen;
