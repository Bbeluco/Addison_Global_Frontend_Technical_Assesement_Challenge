import ButtonBetOption from './ButtonBetOption';
import renderer, { act } from 'react-test-renderer';
import { 
    pushSelectedOptionInfoMock, 
    betOptionMock,
    titleBetMock,
    selectionBetNameMock,
    selectionPriceMock,
    eventIndexMock,
    marketIndexMock,
    selectionIndexMock
} from '../../../../mocks/mockPropsComponents';
import { fireEvent, render, screen } from '@testing-library/react-native';
import userEvent from '@testing-library/user-event'

describe('<ButtonBetOption />', () => {
    it('should render the component correctly', () => {
        const component = renderer.create(
            <ButtonBetOption 
                pushSelectedOptionInfo={pushSelectedOptionInfoMock}
                betOption={betOptionMock}
                titleBet={titleBetMock}
                name={selectionBetNameMock}
                price={selectionPriceMock}
                eventIndex={eventIndexMock}
                marketIndex={marketIndexMock}
                selectionIndex={selectionIndexMock}
            />
        ).toJSON();
        expect(component).toMatchSnapshot();
    })

    it('should call pushSelectedOptionInfoMock function', () => {
        const spy = jest.spyOn(pushSelectedOptionInfoMock, 'add')

        render(
            <ButtonBetOption 
                pushSelectedOptionInfo={pushSelectedOptionInfoMock.add}
                betOption={betOptionMock}
                titleBet={titleBetMock}
                name={selectionBetNameMock}
                price={selectionPriceMock}
                eventIndex={eventIndexMock}
                marketIndex={marketIndexMock}
                selectionIndex={1}
            />
        )

        fireEvent.press(screen.getByText(selectionBetNameMock))
        expect(spy).toHaveBeenCalled()
    })
})