import BetSlip from "./BetSlip";
import renderer from 'react-test-renderer';
import { betOptionMock, pushSelectedOptionInfoMock, navigator } from "../../mocks/mockPropsComponents";


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
})