import axios from "axios";
import { ResponseTypeApi } from "../types/apiResponseType";

interface getBetsAvailableType {
    (response: ResponseTypeApi): void
}

export async function getBetsAvailable(setApiResponseBetAvaible: getBetsAvailableType): Promise<void> {
    try{
        const response: ResponseTypeApi  = (await axios.get('http://www.mocky.io/v2/59f08692310000b4130e9f71')).data
        setApiResponseBetAvaible(response)
    } catch(e) {
        console.log(e)
    }
}