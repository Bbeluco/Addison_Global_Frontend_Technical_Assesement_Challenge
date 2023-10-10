import React, { memo, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import mockReturnApi from "../../constants/mockReturnApi";
import { SEPARATOR, EVENT_INDEX, MARKET_INDEX } from "../../constants/selectOptionConstants";
import MatchTeamsName from "./matchTeamsName/MatchTeamsName";

interface MktpBetType {
    setOptionSelected: (s: string) => void
}

const MktpBet = memo(function MktpBet({ setOptionSelected }: MktpBetType): React.JSX.Element {
    const [betOption, setBetOption] = useState<string[]>([])

    function pushSelectedOptionInfo(option: string): void {
        let aux = [...betOption]

        const optionEventIndex = option.split(SEPARATOR)[EVENT_INDEX]
        const optionMarketIndex = option.split(SEPARATOR)[MARKET_INDEX]

        const searchSameGameAndMarket = aux.filter((optionsSelected) => 
            {
                return optionsSelected.includes(`button${SEPARATOR}${optionEventIndex}${SEPARATOR}${optionMarketIndex}`)
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
                        <MatchTeamsName eventName={event['name']} />
                        {event['markets'].map((market, marketIndex) => (
                            <View style={styles.viewArea}>
                                <Text style={styles.titleBetName}>{market['name']}</Text>
                                <View style={styles.bets}>
                                {market['selections'].map((selection, selectionIndex) => (
                                    <TouchableOpacity
                                        onPress={() => pushSelectedOptionInfo(`button${SEPARATOR}${eventIndex}${SEPARATOR}${marketIndex}${SEPARATOR}${selectionIndex}`)}
                                        style={[styles.viewArea, styles.btnChoseBet, betOption.includes(`button${SEPARATOR}${eventIndex}${SEPARATOR}${marketIndex}${SEPARATOR}${selectionIndex}`) && styles.optinChoosen]}
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