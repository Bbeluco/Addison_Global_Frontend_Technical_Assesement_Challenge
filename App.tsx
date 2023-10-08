import { View } from 'react-native';
import BetSlip from './src/components/betslip/BetSlip';
import MktpBet from './src/components/mktpBet/MktpBet';

export default function App() {
  return (
    <View>
      <BetSlip />
      <MktpBet />
    </View>
  );
}