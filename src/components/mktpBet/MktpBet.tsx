import React, { memo } from "react";
import { StyleSheet, View } from 'react-native';
import BettingOptions from "./bettingOptions/BettingOptions";
import MatchTeamsName from "./matchTeamsName/MatchTeamsName";
import { useMktpBetHooksType } from "../../types/useMktpBetHooksType";
import { getBetsAvailable } from "../../requests/apiRequestInfo";
import { ResponseTypeApi } from "../../types/apiResponseType";

interface MktpBetType {
    betOption: useMktpBetHooksType[],
    pushSelectedOptionInfo: (option: string, teamName: string, titleBet: string, price: number) => void,
    apiResponseBetAvaible: ResponseTypeApi,
    setApiResponseBetAvaible: (response: ResponseTypeApi) => void
}

const MktpBet = memo(function MktpBet({ betOption, pushSelectedOptionInfo, apiResponseBetAvaible, setApiResponseBetAvaible }: MktpBetType): React.JSX.Element {
    getBetsAvailable(setApiResponseBetAvaible)

    return (
        <View style={styles.viewMktpBetOption}>
            {
                apiResponseBetAvaible.map((event, eventIndex) => (
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