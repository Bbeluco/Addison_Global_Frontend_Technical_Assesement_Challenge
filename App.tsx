import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
// import BetSlip from './src/components/betslip/BetSlip';
import MktpBet from './src/components/mktpBet/MktpBet';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Drawer = createDrawerNavigator();

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <MktpBet/>}>
        <Drawer.Screen name="Bets" component={MktpBet} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}