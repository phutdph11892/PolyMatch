import React from 'react';
import {View,Text,StyleSheet,ImageBackground,Dimensions} from 'react-native';
import { Image } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const HomeScreen = () =>{
    return(
        <View style={styles.container}>
      
      <ImageBackground
                source={require('../assets/images/splashimage.jpg')}
                style={{ width: "100%", height: "100%" }}
            >
            <View>
            <Text style={styles.text}>Thanh 20</Text>  
            <Text style={styles.text1}>Có hoạt động gần đây</Text>  
            <View style={styles.phan1}>
                 <Text style={styles.text2}>Game</Text>
                 <Text style={styles.text2}>Lập trình máy tính</Text>
                 <Text style={styles.text2}>Thiết kế đổ họa</Text>
            </View>
            </View>
            </ImageBackground>

      </View>
    )
}

export default HomeScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    text: {
      fontSize:30,
      marginTop:windowHeight/2,
      marginLeft:windowWidth/9,
      color:'#ffffff',
     
    },
    text1: {
      fontSize:15,
      marginTop:windowHeight/90,
      marginLeft:windowWidth/9,
      color:'black',
     
    },
    phan1:{
      width: windowWidth,
      justifyContent: 'center',
      alignItems: 'center',
     
      marginTop:windowHeight/40,
      height:windowHeight/15,
      flexDirection:'row'
    },
    text2: {
      fontSize:15,
     padding:5,
      marginLeft:12,
      color:'#ffffff',
      borderRadius:20,
      backgroundColor:'#2f2e2e'
     
    },
 
  });