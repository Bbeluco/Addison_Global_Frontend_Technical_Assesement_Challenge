import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import BetSlip from './src/components/betslip/BetSlip';
import MktpBet from './src/components/mktpBet/MktpBet';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import useMktpBetHooks from './src/components/mktpBet/MktpBetHooks';
import { getBetsAvailable } from './src/requests/apiRequestInfo';
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
  const { 
    betOption, 
    pushSelectedOptionInfo, 
    removeItemFromArray,
    apiResponseBetAvaible, 
    setApiResponseBetAvaible } = useMktpBetHooks()
  const Drawer = createDrawerNavigator();

  useEffect(() => {
    const response = async () => {
      return await getBetsAvailable()
    }
    response()
      .then((res) => {
          setApiResponseBetAvaible(res.data)
      }).catch(e => {
        console.log(e)
      })
  }, [])


  return (
    <NavigationContainer>
        <Drawer.Navigator 
          useLegacyImplementation={false}
          drawerContent={({ state, navigation}) => <BetSlip betOptions={betOption} removeItemFromArray={removeItemFromArray} closeDrawer={navigation.closeDrawer}/>}>
          <Drawer.Screen name='Bets'>
            {() => <MktpBet 
                      betOption={betOption} 
                      pushSelectedOptionInfo={pushSelectedOptionInfo} 
                      apiResponseBetAvaible={apiResponseBetAvaible}
                    />}
          </Drawer.Screen>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}