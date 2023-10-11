import React from "react";
import { StyleSheet, View, Text } from "react-native";

type MatchTeamsNameType = {
    eventName: string
}

function MatchTeamsName({ eventName }: MatchTeamsNameType): React.JSX.Element {
    return (
        <View style={styles.match}>
            <Text style={styles.matchInfo}>{eventName.split(' vs ')[0]}</Text>
            <Text style={styles.matchInfo}>VS</Text>
            <Text style={styles.matchInfo}>{eventName.split(' vs ')[1]}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    match: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10%'
    },
    matchInfo: {
        fontWeight: 'bold'
    }
})

export default MatchTeamsName