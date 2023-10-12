import axios from "axios";
import { ResponseTypeApi } from "../types/apiResponseType";
import { API_URL } from "../constants/selectOptionConstants";

interface getBetsAvailableType {
    (response: ResponseTypeApi): void
}

export async function getBetsAvailable(setApiResponseBetAvaible: getBetsAvailableType): Promise<void> {
    try{
        const response: ResponseTypeApi  = (await axios.get(API_URL)).data
        setApiResponseBetAvaible(response)
    } catch(e) {
        console.log(e)
    }
}