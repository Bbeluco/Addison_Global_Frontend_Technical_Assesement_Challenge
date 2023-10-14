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
            expect(screen.getByTestId(`button_Real Madrid_betOption`)).toBeTruthy()
        });
        expect(screen.toJSON()).toMatchSnapshot()
    })

    it('should interact with any option available, delete it from BetSlip and restore button to default color', async () => {
        render(<App />)

        await waitFor(() => {
            expect(screen.getByTestId(`button_Real Madrid_betOption`)).toBeTruthy()
        });

        fireEvent.press(screen.getByTestId(`button_Real Madrid_betOption`))
        fireEvent.press(screen.getByText('DELETE'))
        const componentProps = screen.getByTestId(`button_Real Madrid_betOption`).props
        expect(componentProps['style']).not.toMatchObject({ backgroundColor: 'green' })
    })
})