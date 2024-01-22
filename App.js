import { StyleSheet, StatusBar, SafeAreaView, View } from 'react-native';
import Home from './src/telas/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
