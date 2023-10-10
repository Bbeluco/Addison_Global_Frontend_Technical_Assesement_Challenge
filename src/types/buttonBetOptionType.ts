import { SelectionType } from "./apiResponseType"
import { useMktpBetHooksType } from "./useMktpBetHooksType"

export interface ButtonBetOptionType extends Omit<SelectionType, 'id'> {
    pushSelectedOptionInfo: (option: string, teamName: string, titleBet: string, price: number) => void,
    betOption: useMktpBetHooksType[],
    eventIndex: number,
    marketIndex: number,
    selectionIndex: number,
    titleBet: string,
}