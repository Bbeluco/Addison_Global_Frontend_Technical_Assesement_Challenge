import 'react-native-gesture-handler';
import React from 'react';
import BetSlip from './src/components/betslip/BetSlip';
import MktpBet from './src/components/mktpBet/MktpBet';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import useMktpBetHooks from './src/components/mktpBet/MktpBetHooks';

export default function App() {
  const { betOption, pushSelectedOptionInfo, removeItemFromArray } = useMktpBetHooks()
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={({ state, navigation}) => <BetSlip betOptions={betOption} removeItemFromArray={removeItemFromArray} navigation={navigation}/>}>
        <Drawer.Screen name='Bets'>
          {() => <MktpBet betOption={betOption} pushSelectedOptionInfo={pushSelectedOptionInfo}/>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}