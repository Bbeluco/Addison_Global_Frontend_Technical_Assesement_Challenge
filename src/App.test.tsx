import App from "../App";
import axios from "axios";
import mockReturnApi from "./mocks/mockReturnApi";
import { fireEvent, render, screen, waitFor } from "@testing-library/react-native";

jest.mock('axios')

beforeAll(() => {
    (axios.get as jest.Mock).mockResolvedValue({ data: mockReturnApi});
})

describe('<App />', () => {
    it('should render UI correctly', async () => {       
        render(<App />)

        await waitFor(() => {
            expect(screen.getByTestId(`button_Real_Madrid_betOption`)).toBeTruthy()
        });
        expect(screen.toJSON()).toMatchSnapshot()
    })
})