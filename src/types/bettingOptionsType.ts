import { MarketType } from "./apiResponseType"

export interface BettingOptionsType extends Omit<MarketType, 'id'> {
    pushSelectedOptionInfo: (s: string) => void,
    betOption: string[],
    eventIndex: number,
    marketIndex: number
}