import { renderHook, act } from '@testing-library/react'
import useMktpBetHooks from "./MktpBetHooks";
import { SEPARATOR } from "../../constants/selectOptionConstants";

describe('MktpBetHooks', () => {
    it('pushSelectedOptionInfo', () => {
        
        const { result } = 
            renderHook(({ betOption }) => useMktpBetHooks(betOption), { 
                initialProps: {
                    betOption: [{ 'option': `button${SEPARATOR}0${SEPARATOR}0${SEPARATOR}0`, 'teamName': 'b', 'titleBet': 'c', 'price': 1 }]
                }
            })

        act(() => {
            result.current['pushSelectedOptionInfo'](`button${SEPARATOR}0${SEPARATOR}0${SEPARATOR}1`, 'b', 'c', 1)
            result.current['pushSelectedOptionInfo'](`button${SEPARATOR}0${SEPARATOR}1${SEPARATOR}1`, 'b', 'c', 1)
        })

        expect(result.current['betOption']).toEqual([
            { option: 'button_0_0_0', teamName: 'b', titleBet: 'c', price: 1 },
            { option: 'button_0_1_1', teamName: 'b', titleBet: 'c', price: 1 }
          ]
        )
    })

    it('removeItemFromArray', () => {
        const { result } = 
            renderHook(({ betOption }) => useMktpBetHooks(betOption), { 
                initialProps: {
                    betOption: [{ 'option': `button${SEPARATOR}0${SEPARATOR}0${SEPARATOR}0`, 'teamName': 'b', 'titleBet': 'c', 'price': 1 }]
                }
            })

        act(() => {
            result.current['removeItemFromArray'](0)
        })

        expect(result.current['betOption']).toEqual([])
    })
})