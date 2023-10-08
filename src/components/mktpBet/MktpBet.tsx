import React from "react";
import { StyleSheet, Text, View } from 'react-native';

function MktpBet(): React.JSX.Element {
    return  (
        <View style={styles.viewMktpBetOption}>
            <Text>Sou o texto base</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewMktpBetOption: {
        padding: '10%'
    }
})

export default MktpBet;