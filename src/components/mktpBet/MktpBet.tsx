import React, { memo } from "react";
import { StyleSheet, View } from 'react-native';
import mockReturnApi from "../../constants/mockReturnApi";
import BettingOptions from "./bettingOptions/BettingOptions";
import MatchTeamsName from "./matchTeamsName/MatchTeamsName";
import useMktpBetHooks from "./MktpBetHooks";

interface MktpBetType {
    betOption: string[],
    pushSelectedOptionInfo: (s: string) => void
}

const MktpBet = memo(function MktpBet({ betOption, pushSelectedOptionInfo }: MktpBetType): React.JSX.Element {
    return (
        <View style={styles.viewMktpBetOption}>
            {
                mockReturnApi.map((event, eventIndex) => (
                    <View key={eventIndex * Math.random()}>
                        <MatchTeamsName eventName={event['name']} />
                        {event['markets'].map((market, marketIndex) => (
                            <View key={marketIndex * Math.random()}>
                                <BettingOptions
                                    name={market['name']} 
                                    selections={market['selections']}
                                    pushSelectedOptionInfo={pushSelectedOptionInfo}
                                    betOption={betOption}
                                    eventIndex={eventIndex}
                                    marketIndex={marketIndex}
                                />
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
    }
})

export default MktpBet;