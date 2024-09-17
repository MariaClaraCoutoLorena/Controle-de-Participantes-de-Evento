import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles'

type Props = {
	name: string;
}
export function Participant(props: Props) {

    return(
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
        
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}
