import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themelife';

export const styles = StyleSheet.create({
    container: {
        width: '42%',
        height: 46,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        left: '13%',
        top: -45
    },
    title: {
        flex: 1,
        color: theme.colors.heding,
        fontSize: 15,
        textAlign: 'center'
    },


});