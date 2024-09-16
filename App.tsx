import { useBatteryLevel } from 'expo-battery';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const level = useBatteryLevel();
  const [battrylevel, setBatteryLevel] = useState<number>(0);
  const [number, setNumber] = useState<number>(0);

  const ShoweBattryLevel = () => {
    console.log(level);
    setBatteryLevel(level);
  }

  const increaseNumber = () => {
    setNumber(number + 1);
  }

  const decreaseNumber = () => {
    setNumber(number - 1);
  }

  return (
    <View style={styles.container}>

      <Text>Welcome to this Pixel 7</Text>

      <Button title="Get Battery Level"  onPress={() => ShoweBattryLevel()}/>
      {battrylevel !== 0 ? <Text>Your current battery level: {level}</Text> : null}
 
      <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')}/>

      <Button title="Increase Number" onPress={() => increaseNumber()}/>
        <Text>Number: {number}</Text>

      <Button title="Decrease Number" onPress={() => decreaseNumber()}/>

    </View>
  );
}3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
