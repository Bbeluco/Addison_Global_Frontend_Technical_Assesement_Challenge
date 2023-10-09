import React, { memo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import mockReturnApi from "../../constants/mockReturnApi";

interface MktpBetType {
    setOptionSelected: (s: string) => void
}

const MktpBet = memo(function MktpBet({ setOptionSelected }: MktpBetType): React.JSX.Element {
    const [betOption, setBetOption] = useState('')

    return (
        <View style={styles.viewMktpBetOption}>
            {
                mockReturnApi.map((event, index) => (
                    <View key={index}>
                        <View style={styles.match}>
                            <Text style={styles.matchInfo}>{event['name'].split(' vs ')[0]}</Text>
                            <Text style={styles.matchInfo}>VS</Text>
                            <Text style={styles.matchInfo}>{event['name'].split(' vs ')[1]}</Text>
                        </View>
                        {event['markets'].map((market, index) => (
                            <View style={styles.viewArea}>
                                <Text style={styles.titleBetName}>{market['name']}</Text>
                                <View style={styles.bets}>
                                {market['selections'].map((selection, index) => (
                                    <TouchableOpacity
                                        onPress={() => setBetOption('button ' + index)}
                                        style={[styles.viewArea, styles.btnChoseBet, betOption === ('button ' + index) && styles.optinChoosen]}
                                    >
                                        <Text>{selection['name']}</Text>
                                        <Text>{selection['price']}</Text>
                                    </TouchableOpacity>
                                ))}
                                </View>
                            </View>
                        ))}
                    </View>
                ))
            }
        </View>
    )
})

const styles = StyleSheet.create({
    viewMktpBetOption: {
        margin: 5
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
    },
    optinChoosen: {
        backgroundColor: 'green'
    }
})

export default MktpBet;