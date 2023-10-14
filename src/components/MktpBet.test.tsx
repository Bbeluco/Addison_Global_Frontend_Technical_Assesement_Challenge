import MktpBet from "./mktpBet/MktpBet";
import { betOptionMock, pushSelectedOptionInfoMock } from "../mocks/mockPropsComponents";
import mockReturnApi, { mockReturnEmptyMarket } from "../mocks/mockReturnApi";
import { render, screen } from "@testing-library/react-native";

describe('<MktpBet />', () => {
    it('should render the component correctly', () => {
        render(
            <MktpBet
                betOption={betOptionMock}
                pushSelectedOptionInfo={pushSelectedOptionInfoMock.add}
                apiResponseBetAvaible={mockReturnApi}
            />
        )
        expect(screen.toJSON()).toMatchSnapshot();
    })

    it('should not render when market is empty', () => {
        render(
            <MktpBet
                betOption={betOptionMock}
                pushSelectedOptionInfo={pushSelectedOptionInfoMock.add}
                apiResponseBetAvaible={mockReturnEmptyMarket}
            />
        )

        expect(screen.queryByTestId('betting_options')).toBeNull()
    })
})