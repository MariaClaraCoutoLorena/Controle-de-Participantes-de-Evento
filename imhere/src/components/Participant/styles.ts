import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    name: {
        color: '#fff',
        flex: 1,
        fontSize: 16,
        marginLeft: 16
    },
    buttonText: {
        color: '#fdfcfe',
        fontSize: 24
    },
    buttons: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center'
    },
})