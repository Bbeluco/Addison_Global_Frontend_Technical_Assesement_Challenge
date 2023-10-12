import MktpBet from "./mktpBet/MktpBet";
import { betOptionMock, pushSelectedOptionInfoMock } from "../mocks/mockPropsComponents";
import mockReturnApi from "../mocks/mockReturnApi";
import renderer from 'react-test-renderer';

jest.mock('axios')

describe('<MktpBet />', () => {
    it('should render the component correctly', () => {
        const component = renderer.create(
            <MktpBet
                betOption={betOptionMock}
                pushSelectedOptionInfo={pushSelectedOptionInfoMock.add}
                apiResponseBetAvaible={mockReturnApi}
            />
        ).toJSON();
        expect(component).toMatchSnapshot();
    })
})