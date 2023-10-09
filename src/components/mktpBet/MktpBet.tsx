import React, { memo } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MktpBetType {
    setOptionSelected: (s: string) => void
}

const MktpBet = memo(function MktpBet({ setOptionSelected }: MktpBetType): React.JSX.Element {
    return  (
        <View style={styles.viewMktpBetOption}>
            <View style={styles.match}>
                <Text style={styles.matchInfo}>Man United</Text>
                <Text style={styles.matchInfo}>VS</Text>
                <Text style={styles.matchInfo}>Chelsea</Text>
            </View>
            <View style={styles.viewArea}>
                <Text style={styles.titleBetName}>To Win</Text>
                <View style={styles.bets}>
                    <TouchableOpacity style={[styles.viewArea, styles.btnChoseBet]}>
                        <Text>Man United</Text>
                        <Text>1.2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.viewArea, styles.btnChoseBet]}>
                        <Text>Chelsea</Text>
                        <Text>2.2</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    viewMktpBetOption: {
        padding: '10%'
    },
    viewArea: {
        borderWidth: 1,
        borderColor: 'black', 
    },
    match: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10%'
    },
    matchInfo: {
        fontWeight: 'bold'
    },
    bets: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnChoseBet: {
        borderRadius: 10,
        alignItems: 'center',
        width: 100,
        padding: 5,
        margin: 5
    },
    titleBetName: {
        padding: 7
    }
})

export default MktpBet;