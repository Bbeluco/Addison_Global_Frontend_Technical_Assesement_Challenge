import { SEPARATOR } from "../constants/selectOptionConstants"
import mockReturnApi from "./mockReturnApi"

export const betOptionMock = [{ 'option': `button${SEPARATOR}0${SEPARATOR}0${SEPARATOR}0`, 'teamName': 'b', 'titleBet': 'c', 'price': 1 }]

export const pushSelectedOptionInfoMock = {
    add(option: string, teamName: string, titleBet: string, price: number) {},
    remove(itemRemove: number) {},
}

export const navigator = {
    onClose() {},
}

// export function pushSelectedOptionInfoMock(option: string, teamName: string, titleBet: string, price: number) {}
export const titleBetMock = 'Bet123'
export const selectionBetNameMock = 'To win'
export const selectionPriceMock = 12
export const eventIndexMock = 0
export const marketIndexMock = 0
export const selectionIndexMock = 0
export const marketNameMock = 'Market name'
export const selectionsMock = mockReturnApi[0]['markets'][0]['selections']
