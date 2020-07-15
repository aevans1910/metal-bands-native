import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Item from './components/Item'
import data from './metal.json'
import {Count, Fans, Countries, activeBands, splitBands} from './bands'

function BandsScreen() {
  return (
    <SafeAreaView style={styles.all}>
      <FlatList 
        data={data}
        renderItem={({ item, index }) => {
          return <Item title={`${index} ${item.ID}`} data={item}/>
        }}
        keyExtractor={item => item.ID}
      />
    </SafeAreaView>
  );
}

function StatsScreen() {
  return (
    <View style={styles.stats}>
      <Text style={styles.title}>METAL</Text>
      <View style={styles.row}>
        <Text style={styles.labels}>Count: </Text><Text style={styles.values}>{` ${Count}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.labels}>Fans:</Text><Text style={styles.values}>{` ${Fans}`*1000}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.labels}>Countries:</Text><Text style={styles.values}>{` ${Countries}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.labels}>Active:</Text><Text style={styles.values}>{` ${activeBands}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.labels}>Split:</Text><Text style={styles.values}>{` ${splitBands}`}</Text>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Bands') {
              iconName = 'hand-rock'
            } else if (route.name === 'Stats') {
              iconName = 'chart-bar';
            } 

            // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#f00',
          inactiveTintColor: '#600',
          inactiveBackgroundColor:'#000',
          activeBackgroundColor: '#111'
        }}
      >
        <Tab.Screen name="Bands" component={BandsScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// { flex: 1, justifyContent: 'center', alignItems: 'center' }
const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    padding: 10,
  },

  stats: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
  },

  title: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  row: {
    display: "flex",
    flexDirection: 'row',
    textAlign: 'center',
    margin: 2,
  },
  
  labels: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  values: {
    color: '#fff',
    fontSize: 18,
  }
});