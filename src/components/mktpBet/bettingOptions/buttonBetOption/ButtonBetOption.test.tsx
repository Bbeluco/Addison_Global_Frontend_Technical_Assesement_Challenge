import ButtonBetOption from './ButtonBetOption';
import renderer from 'react-test-renderer';
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

describe('<ButtonBetOption />', () => {
    it('should render the component correctly background color green', () => {
        const component = renderer.create(
            <ButtonBetOption 
                pushSelectedOptionInfo={pushSelectedOptionInfoMock.add}
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

    it('should render the component correctly background color default', () => {
        const component = renderer.create(
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