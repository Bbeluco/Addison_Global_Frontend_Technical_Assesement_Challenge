import React, { memo, useState } from "react";
import { StyleSheet, View } from 'react-native';
import mockReturnApi from "../../constants/mockReturnApi";
import BettingOptions from "./bettingOptions/BettingOptions";
import MatchTeamsName from "./matchTeamsName/MatchTeamsName";
import useMktpBetHooks from "./MktpBetHooks";

interface MktpBetType {
    setOptionSelected: (s: string) => void
}

const MktpBet = memo(function MktpBet({ setOptionSelected }: MktpBetType): React.JSX.Element {
    const { betOption, pushSelectedOptionInfo } = useMktpBetHooks()

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