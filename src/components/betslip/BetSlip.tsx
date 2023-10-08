import React from "react";
import { StyleSheet, Button, View } from "react-native";

function BetSlip(): React.JSX.Element {
    return (
        <View style={styles.viewBetSlip}>
            <Button title="X"/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewBetSlip: {
        marginTop: '10%',
        borderWidth: 1
    }
})

export default BetSlip;