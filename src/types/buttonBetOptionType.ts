import { SelectionType } from "./apiResponseType"

export interface ButtonBetOptionType extends Omit<SelectionType, 'id'> {
    pushSelectedOptionInfo: (s: string) => void,
    betOption: string[],
    eventIndex: number,
    marketIndex: number,
    selectionIndex: number
}