import { Text, View } from 'react-native';
import { styles } from './styles'

export default function Home() {
  return(
    <View style={styles.container}> 

      <Text style={styles.eventTitle}> Clarinha's Birthday </Text>

      <Text style={styles.eventInfo}> Sexta, 8 de junho de 2004 </Text>

    </View>
  )
}
