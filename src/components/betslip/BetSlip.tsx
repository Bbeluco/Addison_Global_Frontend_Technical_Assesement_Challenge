import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import MktpBet from "../mktpBet/MktpBet";


const Drawer = createDrawerNavigator();

function BetSlip(): React.JSX.Element {
    return (
        <Drawer.Navigator defaultStatus="open">
            <Drawer.Screen name="Feed" component={MktpBet} />
        </Drawer.Navigator>
      );
}

const styles = StyleSheet.create({
    viewBetSlip: {
        marginTop: '10%',
        borderWidth: 1
    }
})

export default BetSlip;