import axios from "axios";
import { ResponseTypeApi } from "../types/apiResponseType";
import { API_URL } from "../constants/selectOptionConstants";
import { AxiosResponse } from "axios";

export async function getBetsAvailable(): Promise<AxiosResponse<ResponseTypeApi>> {
    try{
        const response = (await axios.get(API_URL))
        return response
    } catch(e) {
        throw e
    }
}