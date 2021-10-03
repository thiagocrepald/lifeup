import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themelife';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        margin: 20,
        paddingHorizontal: 50
    },
    title: {
        fontFamily: theme.fonts.text400
    },
    subtitle: {
        fontFamily: theme.fonts.text400
    },
    image: {
        width: '20%',
        height: 129,
        margin: 30
    },
    input: {
        marginTop: 10,
        width: '85%',
        height: 55,
        backgroundColor: theme.colors.life,
        color: theme.colors.life,
        borderRadius: 8,
        fontSize: 13,
        marginRight: 4,
        textAlign: 'center',
    },
});