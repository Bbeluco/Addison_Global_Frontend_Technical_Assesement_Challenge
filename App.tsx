import 'react-native-gesture-handler';
import React, { useState } from 'react';
import BetSlip from './src/components/betslip/BetSlip';
import MktpBet from './src/components/mktpBet/MktpBet';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

export default function App() {
  const [optionSelected, setOptionSelected] = useState('')
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(_props) => <BetSlip bets={optionSelected}/>}>
        <Drawer.Screen name='Bets'>
          {() => <MktpBet setOptionSelected={setOptionSelected}/>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}