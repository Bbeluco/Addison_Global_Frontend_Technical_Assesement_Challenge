import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MarketType } from "../../../types/apiResponseType";
import { SEPARATOR } from "../../../constants/selectOptionConstants";

interface BettingOptions extends Omit<MarketType, 'id'> {
    pushSelectedOptionInfo: (s: string) => void,
    betOption: string[],
    eventIndex: number,
    marketIndex: number
}

function BettingOptions({ 
        name, 
        selections, 
        pushSelectedOptionInfo, 
        betOption, 
        eventIndex, 
        marketIndex }: BettingOptions): React.JSX.Element {
    return (
        <View style={styles.viewArea}>
            <Text style={styles.titleBetName}>{name}</Text>
            <View style={styles.bets}>
            {selections.map((selection, selectionIndex) => (
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
    )
}

const styles = StyleSheet.create({
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

export default BettingOptions;