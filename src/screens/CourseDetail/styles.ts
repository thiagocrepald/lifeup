import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        margin: 0,
        marginTop: '12%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: '#3D4D59',
        padding: 6,
        fontWeight: 'bold'
    },
    coursevideo: {
        width: '100%',
        height: 288
    },
    namedescription: {
        fontSize: 12,
        marginTop: '2%',
        marginLeft: '6%',
        color: '#3D4D59'

    },
    progress: {
        width: 345,
        height: 45
    },
    textprog: {
        textAlign: 'center',
        fontSize: 14
    },
    imgprog: {
        marginTop: '2%'
    },
    smallAcord: {
        width: 364,
        height: 64,
        alignContent:'center',
        flexDirection: 'row',
        marginTop: '6%'
    },
    module: {
        marginLeft: '74%',
        marginTop: 18,
    },
    intro: {
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: '-19%'
    },
    modules: {
        width: 345,
        height: 45,
        flexDirection: 'row'
    },
    thumb: {
        margin: 0
    },
    timemodule: {
        fontSize: 12,
        color: '#58585C',
        marginLeft: '-43%',
        marginTop: 8
    },
    titlemodules: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 10
    },
    check: {
        marginLeft: '48%',
        marginTop: '4%'
    },
    statuscourse: {
        width: '100%',
        height: 55,
        backgroundColor: '#34C6AC',
        marginTop: 4
    },
    modulesstatus: {
        width: 345,
        height: 45,
        flexDirection: 'row',
        marginLeft: '8%',
        marginTop: 4
    },
    thumbstatus: {
        margin: 0
    },
    titlemodulesstatus: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#fff'
    },
    timemodulestatus: {
        fontSize: 12,
        color: '#fff',
        marginLeft: '-43%',
        marginTop: 8
    },
    /* TABS NAVIGATION*/
    tabs: {
        alignItems: "center", // ignore this - we'll come back to it
        justifyContent: "center", // ignore this - we'll come back to it
        flexDirection: "row",
        marginTop: '36%'
      },
      square: {
        width: 100,
        height: 100,
        margin: -4,
        alignItems: 'center'
      },



});