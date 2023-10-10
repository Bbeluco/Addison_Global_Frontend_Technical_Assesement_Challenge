import React, { memo, useState } from "react";
import { StyleSheet, View } from 'react-native';
import mockReturnApi from "../../constants/mockReturnApi";
import { SEPARATOR, EVENT_INDEX, MARKET_INDEX } from "../../constants/selectOptionConstants";
import BettingOptions from "./bettingOptions/BettingOptions";
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
                            <BettingOptions
                                name={market['name']} 
                                selections={market['selections']}
                                pushSelectedOptionInfo={pushSelectedOptionInfo}
                                betOption={betOption}
                                eventIndex={eventIndex}
                                marketIndex={marketIndex}
                            />
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
    }
})

export default MktpBet;