import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export default function Home() {
  
    function handleParticipantAdd(){
        console.log('Botão adicionar clicado')
    }

    function handleParticipantRemove(name: string){
        console.log(`Cliquei para remover ${name}`)
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

        <Participant name="Maria Clara Couto Lorena" onRemove={() => handleParticipantRemove("Clara")}/>
        <Participant name="Thiago Cortez" onRemove={() => handleParticipantRemove("Thiago")}/>
        <Participant name="Marcos Alves" onRemove={() => handleParticipantRemove("Marcos")}/>

    </View>
  )
}
