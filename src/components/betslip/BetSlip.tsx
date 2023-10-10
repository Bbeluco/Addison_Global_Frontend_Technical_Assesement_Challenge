import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface BetSlipType {
    betOption: string[]
}

function BetSlip({ betOption }: BetSlipType): React.JSX.Element {
    return (
        <View style={styles.bets}>
            <Text style={styles.betOption}>Man United to WIN</Text>
            <Text style={[styles.betPrice, styles.defaultPadding]}>1.2</Text>
            <TouchableOpacity style={styles.btnDeleteBet}>
                <Text style={styles.btnDeleteBetText}>DELETE</Text>
            </TouchableOpacity>
            <View style={[styles.hr, styles.defaultMargin]}/>
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
    }
})

export default BetSlip;