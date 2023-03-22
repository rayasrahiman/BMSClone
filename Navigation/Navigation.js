import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntIcon from 'react-native-vector-icons/dist/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';

import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#333545',
          },
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}>
                <AntIcon name="search1" size={24} color="white" />
              </View>
              <View style={{marginRight: 10}}>
                <IoniconsIcon
                  name="notifications-outline"
                  size={24}
                  color="white"
                />
              </View>
              <View style={{marginRight: 10}}>
                <MaterialIcon name="qr-code-scanner" size={24} color="white" />
              </View>
            </View>
          ),
        }}>
        <Tab.Screen
          options={{
            headerTitle: () => (
              <View>
                <Text
                  style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                  It All Starts here
                </Text>
                <Text style={{color: '#7e7e7e'}}>Mangalore</Text>
              </View>
            ),
            tabBarLabel: tabInfo => (
              <View>
                <Text
                  style={{
                    color: tabInfo.focused ? 'red' : '#7e7e7e',
                    fontSize: 12,
                  }}>
                  Home
                </Text>
              </View>
            ),

            tabBarIcon: tabInfo => {
              return (
                <IoniconsIcon
                  name="square"
                  size={24}
                  color={tabInfo.focused ? 'red' : '#7e7e7e'}
                />
              );
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            headerTitle: () => (
              <View>
                <Text
                  style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                  Experience begins here
                </Text>
                <Text style={{color: '#7e7e7e'}}>Mangalore</Text>
              </View>
            ),
            tabBarLabel: tabInfo => (
              <View>
                <Text
                  style={{
                    color: tabInfo.focused ? 'red' : '#7e7e7e',
                    fontSize: 12,
                  }}>
                  Events
                </Text>
              </View>
            ),

            tabBarIcon: tabInfo => {
              return (
                <MaterialIcon
                  name="event"
                  size={24}
                  color={tabInfo.focused ? 'red' : '#7e7e7e'}
                />
              );
            },
          }}
          name="Events"
          component={EventsScreen}
        />
        <Tab.Screen
          options={{
            headerTitle: () => (
              <View>
                <Text
                  style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                  Profile
                </Text>
                <Text style={{color: '#7e7e7e'}}>Mangalore</Text>
              </View>
            ),
            tabBarLabel: tabInfo => (
              <View>
                <Text
                  style={{
                    color: tabInfo.focused ? 'red' : '#7e7e7e',
                    fontSize: 12,
                  }}>
                  Profile
                </Text>
              </View>
            ),

            tabBarIcon: tabInfo => {
              return (
                <MaterialIcon
                  name="person"
                  size={24}
                  color={tabInfo.focused ? 'red' : '#7e7e7e'}
                />
              );
            },
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// const Stack = createNativeStackNavigator();

// export default function Navigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
