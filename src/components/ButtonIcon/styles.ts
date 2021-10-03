import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themelife';

export const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        flex: 1,
        color: theme.colors.heding,
        fontSize: 15,
        textAlign: 'center'
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderEndWidth: 1,
        borderColor: theme.colors.line
    },
    icon: {
        width: 24,
        height: 18
    }

});