import ButtonBetOption from './ButtonBetOption';
import renderer from 'react-test-renderer';
import { pushSelectedOptionInfoMock, betOptionMock } from '../../../../mocks/mockPropsComponents';

describe('<ButtonBetOption />', () => {
    it('should render the component correctly', () => {
        const component = renderer.create(
            <ButtonBetOption 
                pushSelectedOptionInfo={pushSelectedOptionInfoMock}
                betOption={betOptionMock}
                titleBet='Bet123'
                name='To win'
                price={12}
                eventIndex={0}
                marketIndex={0}
                selectionIndex={0}
            />
        ).toJSON();
        expect(component).toMatchSnapshot();
    })
})