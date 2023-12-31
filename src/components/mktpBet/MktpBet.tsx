import React, { memo } from "react";
import { StyleSheet, View } from 'react-native';
import BettingOptions from "./bettingOptions/BettingOptions";
import MatchTeamsName from "./matchTeamsName/MatchTeamsName";
import { useMktpBetHooksType } from "../../types/useMktpBetHooksType";
import { ResponseTypeApi } from "../../types/apiResponseType";
import { ScrollView } from "react-native-gesture-handler";

interface MktpBetType {
    betOption: useMktpBetHooksType[],
    pushSelectedOptionInfo: (option: string, teamName: string, titleBet: string, price: number) => void,
    apiResponseBetAvaible: ResponseTypeApi
}

const MktpBet = memo(function MktpBet({ betOption, pushSelectedOptionInfo, apiResponseBetAvaible }: MktpBetType): React.JSX.Element {   
    return (
        <ScrollView style={styles.viewMktpBetOption} data-testID='mktp_bet'>
            {
                apiResponseBetAvaible.map((event, eventIndex) => {
                    if(event['markets'].length){   
                        return (
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
                        )
                    }
            })
            }
        </ScrollView>
    )
})

const styles = StyleSheet.create({
    viewMktpBetOption: {
        margin: 5
    }
})

export default MktpBet;