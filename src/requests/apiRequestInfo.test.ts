import axios from "axios"
import mockReturnApi from "../constants/mockReturnApi"
import { getBetsAvailable } from "./apiRequestInfo"

jest.mock('axios')

describe('getBetsAvailable', () => {
    it('should return expected information when request API', async () => {
        (axios.get as jest.Mock).mockImplementation(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(mockReturnApi)
                }, 200 + Math.random() * 300)
            })
        });

        expect(await getBetsAvailable()).toEqual(mockReturnApi)
    })

    it('should test throw error', async () => {
        (axios.get as jest.Mock).mockRejectedValue(new Error('error'))

        expect(async () => await getBetsAvailable()).rejects.toThrow('error')
    })
})