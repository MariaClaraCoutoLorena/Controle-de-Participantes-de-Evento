import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return(
    <View style={styles.container}> 

      <Text style={styles.eventTitle}> Clarinha's Birthday </Text>

      <Text style={styles.eventInfo}> Sexta, 8 de junho de 2004 </Text>

    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex:1,
      backgroundColor: '#111111',
      padding: 24
    },
    eventTitle: {
      color: '#ffffff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
      marginBottom: 6
    },
    eventInfo: {
      color: '#6b6b6b',
      fontSize: 16
    }

  }
)