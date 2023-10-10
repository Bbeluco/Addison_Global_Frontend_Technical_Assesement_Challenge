import { SEPARATOR, EVENT_INDEX, MARKET_INDEX } from "../../constants/selectOptionConstants";
import { useState } from "react";
import { useMktpBetHooksType } from "../../types/useMktpBetHooksType";

function useMktpBetHooks() {
    const [betOption, setBetOption] = useState<useMktpBetHooksType[]>([])

    function pushSelectedOptionInfo(option: string, teamName: string, titleBet: string, price: number): void {
        // let test = [{ option, teamName, titleBet, price }]
        // setBetOption(test)
        // console.log(betOption)

        let aux = [...betOption]
        const optionEventIndex = option.split(SEPARATOR)[EVENT_INDEX]
        const optionMarketIndex = option.split(SEPARATOR)[MARKET_INDEX]
    
        const searchSameGameAndMarket = aux.filter((optionsSelected) => 
            {
                return optionsSelected['option'].includes(`button${SEPARATOR}${optionEventIndex}${SEPARATOR}${optionMarketIndex}`)
            }
        )

        if(searchSameGameAndMarket[0] !== undefined){
            aux.splice(aux.indexOf(searchSameGameAndMarket[0]), 1)
        }
        aux.push({ option, teamName, titleBet, price })
        setBetOption(aux)
    }

    return { betOption, pushSelectedOptionInfo }
}

export default useMktpBetHooks