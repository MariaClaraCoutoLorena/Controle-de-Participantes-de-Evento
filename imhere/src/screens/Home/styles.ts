import { StyleSheet } from "react-native"

export const styles = StyleSheet.create(
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
      },
      inputs: {
        flex: 1,
        backgroundColor: '#1f1e25',
        height: 56,
        borderRadius: 5,
        color: '#fdfcfe',
        padding: 16,
        fontSize: 16,
        marginRight: 12
      },
      buttonText: {
        color: '#fdfcfe',
        fontSize: 24
      },
      buttons: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center'
      },
      forms: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
      },
      listEmptytext: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center'
      }
      
    }
  )