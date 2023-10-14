import ButtonBetOption from './ButtonBetOption';
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
        render(
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
        )
        expect(screen.toJSON()).toMatchSnapshot();
        const componentProps = screen.getByTestId(`button_${selectionBetNameMock}_betOption`).props
        expect(componentProps['style']).toMatchObject({ backgroundColor: 'green' })
    })

    it('should render the component correctly background color default', () => {
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
        expect(screen.toJSON()).toMatchSnapshot();
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