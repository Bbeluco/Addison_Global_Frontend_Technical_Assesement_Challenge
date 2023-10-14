import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useMktpBetHooksType } from "../../types/useMktpBetHooksType";

interface BetSlipType {
    betOptions: useMktpBetHooksType[],
    removeItemFromArray: (itemToRemove: number) => void,
    closeDrawer: () => void
}

function BetSlip({ betOptions, removeItemFromArray, closeDrawer }: BetSlipType): React.JSX.Element {
    return (
        <View>
            <TouchableOpacity style={styles.btnCloseDrawer} onPress={() => closeDrawer()}>
                <Text style={styles.textBtnCloseDrawer}>X</Text>
            </TouchableOpacity>
            {betOptions?.map((betOption, index) => (
                <View key={index * Math.random()} style={styles.bets}>
                    <Text style={styles.betOption}>{`${betOption['teamName']} ${betOption['titleBet']}`}</Text>
                    <Text style={[styles.betPrice, styles.defaultPadding]}>{betOption['price']}</Text>
                    <TouchableOpacity 
                        style={styles.btnDeleteBet} 
                        onPress={() => removeItemFromArray(index)}
                    >
                        <Text style={styles.btnDeleteBetText}>DELETE</Text>
                    </TouchableOpacity>
                    <View style={[styles.hr, styles.defaultMargin]}/>
                </View>
            ))}
        </View>
      );
}

const styles = StyleSheet.create({
    defaultPadding: {
        padding: 10
    },
    defaultMargin: {
        margin: 10
    },
    bets: {
        marginTop: 50,
        alignItems: 'center'
    },
    betOption: {
        fontWeight: "bold"
    },
    betPrice: {
        fontWeight: "bold",
        fontSize: 20
    },
    btnDeleteBet: {
        backgroundColor: 'black',
        borderRadius: 5
    },
    btnDeleteBetText: {
        color: 'white',
        margin: 5
    },
    hr: {
        borderBottomColor: 'black',
        width: '80%',
        borderWidth: 1,
        backgroundColor: 'black'
    },
    textBtnCloseDrawer: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnCloseDrawer: {
        margin: 20
    }
})

export default BetSlip;