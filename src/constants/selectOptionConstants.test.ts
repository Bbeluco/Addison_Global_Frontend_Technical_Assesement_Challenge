import { SEPARATOR, EVENT_INDEX, MARKET_INDEX, API_URL } from "./selectOptionConstants" 

describe('selectOptionConstants', () => {
    it('should have correct values for constants', () => {
        expect(SEPARATOR).toEqual('_')
        expect(EVENT_INDEX).toEqual(1)
        expect(MARKET_INDEX).toEqual(2)
        expect(API_URL).toEqual('http://www.mocky.io/v2/59f08692310000b4130e9f71')
    })
})