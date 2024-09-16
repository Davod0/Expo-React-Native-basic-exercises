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
      <Text style={styles.headerText}>Welcome to this Pixel 7</Text>

      <View style={styles.buttonContainer}>
        <Button title="Get Battery Level" onPress={ShoweBattryLevel} color="#4CAF50" />
      </View>

       {battrylevel !== 0 ?
        <Text style={styles.batteryText}>Your current battery level: {Math.round(level * 100)}%</Text>
        : null}

      <View style={styles.buttonContainer}>
        <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')} color="#2196F3" />
      </View>

      <View style={styles.numberContainer}>
        <Button title="Increase Number" onPress={increaseNumber} color="#8E24AA" />
        {number!== 0? <Text style={styles.numberText}>Number: {number}</Text> : null}
        <Button title="Decrease Number" onPress={decreaseNumber} color="#D32F2F" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
  batteryText: {
    fontSize: 18,
    color: '#4CAF50',
    marginVertical: 10,
  },
  numberContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  numberText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
