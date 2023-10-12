import App from "../App";
import axios from "axios";
import renderer, { act } from 'react-test-renderer';
import mockReturnApi from "./mocks/mockReturnApi";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { waitFor } from "@testing-library/dom";

jest.mock('axios')

beforeAll(() => {
    (axios.get as jest.Mock).mockResolvedValue({ data: mockReturnApi});
})

describe('<App />', () => {
    it('should render UI correctly', async () => {
        const component = renderer.create(<App/>).toJSON();
        await waitFor(() => {
            screen.findByText(mockReturnApi[0]['markets'][0]['name'])
        })
        expect(component).toMatchSnapshot();
    })

    it('should interact with any option available', async () => {
        render(<App />)
        await waitFor(() => {
            screen.findByText(mockReturnApi[0]['markets'][0]['name'])
        })

        screen.debug()
    })
})