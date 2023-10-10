import { MarketType } from "./apiResponseType"
import { useMktpBetHooksType } from "./useMktpBetHooksType"

export interface BettingOptionsType extends Omit<MarketType, 'id'> {
    pushSelectedOptionInfo: (option: string, teamName: string, titleBet: string, price: number) => void,
    betOption: useMktpBetHooksType[],
    eventIndex: number,
    marketIndex: number
}