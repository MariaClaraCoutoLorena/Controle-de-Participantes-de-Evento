import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export default function Home() {
  
    function handleParticipantAdd(){
        console.log('Botão adicionar clicado')
    }

  return(
    <View style={styles.container}> 

        <Text style={styles.eventTitle}> Clarinha's Birthday </Text>

        <Text style={styles.eventInfo}> Sexta, 8 de junho de 2004 </Text>

        <View style={styles.forms}>
            <TextInput 
                style={styles.inputs} 
                placeholder='Nome do participante'
                placeholderTextColor='#6b6b6b'
            />

            <TouchableOpacity style={styles.buttons} onPress={ handleParticipantAdd }>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>

        <Participant name="Maria Clara Couto Lorena"/>
        <Participant name="Thiago Cortez"/>
        <Participant name="Marcos Alves"/>

    </View>
  )
}
