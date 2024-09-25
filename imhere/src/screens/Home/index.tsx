import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useState } from 'react';
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export default function Home() {
    
    const [participants , setParticipants] = useState(["Clara"]);
    const [participantName, setParticipantName] = useState('')

    function addParticipants(participantName: string) {
        setParticipants(prevState => [... prevState, participantName])
    }
  
    function handleParticipantAdd(){
        if(participants.includes(participantName)) {
            Alert.alert("Participante Existente", "Este participante já está na lista")
        } else {
            addParticipants(participantName)
        }
        setParticipantName('')
    }

    function handleParticipantRemove(name: string){
        Alert.alert("Remover", `Deseja remover ${name}?`, [
            {
                text: "Sim",
                onPress: () => {
                    participants.splice(participants.indexOf(name),1)
                    Alert.alert("Participante removido com sucesso!")
                }
            },
            {
                text: "Não",
                style: "cancel"
            }
        ])

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
                onChangeText={setParticipantName}
                value = {participantName}
            />

            <TouchableOpacity style={styles.buttons} onPress={ () => handleParticipantAdd() }>
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
