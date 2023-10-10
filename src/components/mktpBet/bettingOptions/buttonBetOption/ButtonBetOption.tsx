import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { SEPARATOR } from "../../../../constants/selectOptionConstants";
import { ButtonBetOptionType } from "../../../../types/buttonBetOptionType";

function ButtonBetOption({ 
        pushSelectedOptionInfo,
        betOption,
        name,
        price,
        eventIndex,
        marketIndex,
        selectionIndex }: ButtonBetOptionType): React.JSX.Element {

    const buttonIdentifier = `button${SEPARATOR}${eventIndex}${SEPARATOR}${marketIndex}${SEPARATOR}${selectionIndex}`
    return (
        <TouchableOpacity
            onPress={() => pushSelectedOptionInfo(buttonIdentifier)}
            style={[styles.viewArea, styles.btnChoseBet, betOption.includes(buttonIdentifier) && styles.optinChoosen]}
        >
            <Text>{name}</Text>
            <Text>{price}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    viewArea: {
        borderWidth: 1,
        borderColor: 'black', 
    },
    btnChoseBet: {
        borderRadius: 10,
        alignItems: 'center',
        width: 100,
        padding: 5,
        margin: 5
    },
    optinChoosen: {
        backgroundColor: 'green'
    }
})

export default ButtonBetOption