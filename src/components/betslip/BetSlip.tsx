import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface BetSlipType {
    bets: string
}

function BetSlip({ bets }: BetSlipType): React.JSX.Element {
    return (
        <View style={styles.bets}>
            <Text>{bets}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    bets: {
        marginTop: 50
    }
})

export default BetSlip;