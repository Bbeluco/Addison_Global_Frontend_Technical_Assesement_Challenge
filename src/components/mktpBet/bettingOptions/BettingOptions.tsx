import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { BettingOptionsType } from "../../../types/bettingOptionsType";
import ButtonBetOption from "./buttonBetOption/ButtonBetOption";

function BettingOptions({ 
        name, 
        selections, 
        pushSelectedOptionInfo, 
        betOption, 
        eventIndex, 
        marketIndex }: BettingOptionsType): React.JSX.Element {
    return (
        <View style={styles.viewArea}>
            <Text style={styles.titleBetName}>{name}</Text>
            <View style={styles.bets}>
            {selections.map((selection, selectionIndex) => (
                <ButtonBetOption 
                    pushSelectedOptionInfo={pushSelectedOptionInfo}
                    betOption={betOption}
                    name={selection['name']}
                    price={selection['price']}
                    eventIndex={eventIndex}
                    marketIndex={marketIndex}
                    selectionIndex={selectionIndex}
                />
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
    titleBetName: {
        padding: 7
    }
})

export default BettingOptions;