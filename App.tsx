import { useBatteryLevel } from 'expo-battery';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const battryLevel = useBatteryLevel(); 

  return (
    <View style={styles.container}>
      <Text>Batterinivå: {battryLevel}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
