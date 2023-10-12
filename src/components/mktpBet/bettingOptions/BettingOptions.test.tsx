import BettingOptions from "./BettingOptions"
import { 
    marketNameMock, 
    selectionsMock, 
    pushSelectedOptionInfoMock,
    betOptionMock,
    eventIndexMock,
    marketIndexMock
} from "../../../mocks/mockPropsComponents";
import renderer from 'react-test-renderer';

describe('<BettingOptions />', () => {
    it('should render the component correctly', () => {
        const component = renderer.create(
            <BettingOptions
                name={marketNameMock} 
                selections={selectionsMock}
                pushSelectedOptionInfo={pushSelectedOptionInfoMock.add}
                betOption={betOptionMock}
                eventIndex={eventIndexMock}
                marketIndex={marketIndexMock}
            />
        ).toJSON();
        expect(component).toMatchSnapshot();
    })
})