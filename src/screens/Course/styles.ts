import { StyleSheet, ImageBackground } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#3D4D59',
   },
   Image: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'transparent',
        justifyContent: 'flex-start',
    },
    subtitle: {
        height: 39,
        width: 273,
        color:'#fff',
        left: '22%',
        top: '-5%',
        fontSize: 14

    },
    title: {
        height: 21,
        width: 293,
        left: 15,
        right: 67,
        top: -24,
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold"
    },
    tabs: {
        width: 177,
        height: 264,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8
    }

});