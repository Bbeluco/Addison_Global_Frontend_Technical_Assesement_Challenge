/** The response type of the API call */
export type ResponseTypeApi = EventType[];

/** Event Entity */
type EventType = {
    id: string;
    name: string;
    markets: MarketType[];
};

/** Market Entity */
export type MarketType = {
    id: string;
    name: string;
    selections: SelectionType[];
}

/** Selection Entity */
type SelectionType = {
    id: string;
    name: string;
    price: number;
}
