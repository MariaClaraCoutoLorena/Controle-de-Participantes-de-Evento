import { Text, View, TextInput, TouchableOpacity, FlatList, Flat } from 'react-native';
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export default function Home() {
    const participants = ["Clara", "Thiago", "Marcos", "Ana", "Julia", "Tassso", "Betânia", "Nicolas", "Rafael"]
  
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

        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Participant
                    name={item} 
                    onRemove={() => handleParticipantRemove(item)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={ () => (
                <Text style={styles.listEmptytext}>
                    Ninguém chegou au seu evento ainda? Adicione participantes a sua lista de presença
                </Text>
            )}
        />

                           

    </View>
  )
}
