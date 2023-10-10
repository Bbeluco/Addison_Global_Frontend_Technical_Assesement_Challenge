import React, { memo, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import mockReturnApi from "../../constants/mockReturnApi";

interface MktpBetType {
    setOptionSelected: (s: string) => void
}

const MktpBet = memo(function MktpBet({ setOptionSelected }: MktpBetType): React.JSX.Element {
    const [betOption, setBetOption] = useState<string[]>([])

    function pushSelectedOptionInfo(option: string): void {
        let aux = [...betOption]

        const optionEventIndex = option.split('_')[1]
        const optionMarketIndex = option.split('_')[2]

        const searchSameGameAndMarket = aux.filter((optionsSelected) => 
            {
                return optionsSelected.includes(`button_${optionEventIndex}_${optionMarketIndex}`)
            }
        )
        if(searchSameGameAndMarket[0] !== undefined){
            aux.splice(aux.indexOf(searchSameGameAndMarket[0]), 1)
        }
        aux.push(option)
        setBetOption(aux)
    }

    return (
        <View style={styles.viewMktpBetOption}>
            {
                mockReturnApi.map((event, eventIndex) => (
                    <View key={eventIndex}>
                        <View style={styles.match}>
                            <Text style={styles.matchInfo}>{event['name'].split(' vs ')[0]}</Text>
                            <Text style={styles.matchInfo}>VS</Text>
                            <Text style={styles.matchInfo}>{event['name'].split(' vs ')[1]}</Text>
                        </View>
                        {event['markets'].map((market, marketIndex) => (
                            <View style={styles.viewArea}>
                                <Text style={styles.titleBetName}>{market['name']}</Text>
                                <View style={styles.bets}>
                                {market['selections'].map((selection, selectionIndex) => (
                                    <TouchableOpacity
                                        onPress={() => pushSelectedOptionInfo(`button_${eventIndex}_${marketIndex}_${selectionIndex}`)}
                                        style={[styles.viewArea, styles.btnChoseBet, betOption.includes(`button_${eventIndex}_${marketIndex}_${selectionIndex}`) && styles.optinChoosen]}
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