import { SEPARATOR, EVENT_INDEX, MARKET_INDEX } from "../../constants/selectOptionConstants";
import { useState } from "react";

function useMktpBetHooks() {
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

    return { betOption, pushSelectedOptionInfo }
}

export default useMktpBetHooks