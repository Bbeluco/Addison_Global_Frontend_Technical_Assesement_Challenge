import React, { memo } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

interface MktpBetType {
    setOptionSelected: (s: string) => void
}

const MktpBet = memo(function MktpBet({ setOptionSelected }: MktpBetType): React.JSX.Element {
    return  (
        <View style={styles.viewMktpBetOption}>
            <Button onPress={() => setOptionSelected('' + (Math.random()))} title={'Change here'}/>
        </View>
    )
})

const styles = StyleSheet.create({
    viewMktpBetOption: {
        padding: '10%'
    }
})

export default MktpBet;