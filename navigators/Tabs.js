import React from 'react';
import {View,Text} from 'react-native';
import HomeScreen from '../tabs/HomeScreen'
import ProfileScreen from '../tabs/ProfileScreen'
import ChatScreen from '../tabs/ChatScreen'
import StarsScreen from '../tabs/StarsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5,SimpleLineIcons,MaterialIcons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Tabs = () =>{
    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            // Floating Tab Bar...
            style: { 
              bottom: 2,
          // Max Height...
          height: 65,
                 backgroundColor:'#52463d',
          // Shadow...
          shadowColor: '#000',
          
          shadowOffset: {
            width: 1,
            height: 1
          },
         
           
            }
          }}
        >
        <Tab.Screen name="Home" component={HomeScreen}
        
        options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                // centring Tab Button...
                position: 'absolute',
                top: 20
              }}>
                <SimpleLineIcons
                  name="home"
                  size={25}
                  color={focused ? '#fc7500' : '#ffffff'}
                ></SimpleLineIcons>
              </View>
            )
          }}/>
        <Tab.Screen name="Stars" component={StarsScreen} 
        options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                // centring Tab Button...
                position: 'absolute',
                top: 20
              }}>
<MaterialIcons name="local-fire-department" size={29} color={focused ? '#fc7500' : '#ffffff'} />         
     </View>
            )
          }}
        />
        <Tab.Screen name="Chat" component={ChatScreen} 
        options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                // centring Tab Button...
                position: 'absolute',
                top: 20
              }}>
                <FontAwesome5
                  name="comment-dots"
                  size={25}
                  color={focused ? '#fc7500' : '#ffffff'}
                ></FontAwesome5>
              </View>
            )
          }}
        />
        <Tab.Screen name={"Profile" } component={ProfileScreen} 
        options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                // centring Tab Button...
                position: 'absolute',
                top: 20
              }}>
                <FontAwesome5
                  name="user-circle"
                  size={25}
                  color={focused ? '#fc7500' : '#ffffff'}
                ></FontAwesome5>
              </View>
            )
          }}
        />
      </Tab.Navigator>
    )
}

export default Tabs;