import BetSlip from "./BetSlip";
import renderer from 'react-test-renderer';
import { betOptionMock, pushSelectedOptionInfoMock, navigator } from "../../mocks/mockPropsComponents";
import { fireEvent, render, screen } from "@testing-library/react-native";

describe('<BetSlip />', () => {
    it('should render UI correctly', () => {
        const component = renderer.create(
            <BetSlip 
                betOptions={betOptionMock}
                removeItemFromArray={pushSelectedOptionInfoMock.remove}
                closeDrawer={navigator.onClose}
            />
        ).toJSON();
        expect(component).toMatchSnapshot();
    })

    it('should call expected functions', () => {
        const spyPushSelectedOptionInfoMock = jest.spyOn(pushSelectedOptionInfoMock, 'remove');
        const spyNavigator = jest.spyOn(navigator, 'onClose')

        render(
            <BetSlip 
                betOptions={betOptionMock}
                removeItemFromArray={pushSelectedOptionInfoMock.remove}
                closeDrawer={navigator.onClose}
            />
        )

        fireEvent.press(screen.getByText('DELETE'))
        expect(spyPushSelectedOptionInfoMock).toHaveBeenCalled()
        fireEvent.press(screen.getByText('X'))
        expect(spyNavigator).toHaveBeenCalled()
    })
})