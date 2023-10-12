import MatchTeamsName from "./MatchTeamsName";
import renderer from 'react-test-renderer';

describe('<MatchTeamsName />', () => {
    it('should render the component correctly', () => {
        const component = renderer.create(<MatchTeamsName eventName="Vasco vs 15 de Piracicaba"/>).toJSON();
        expect(component).toMatchSnapshot();
    })
})