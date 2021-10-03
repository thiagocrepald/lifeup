import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themelife';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 24,
    },
    title: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.politic,
        fontSize: 14
    },
    subtitle: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.line,
        fontSize: 18,
    },
});