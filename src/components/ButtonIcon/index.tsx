import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import LoginImg from '../../assets/loginimg.png';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest } : Props){
    return(
        <TouchableOpacity 
            style={styles.container} 
            { ...rest }
        >
            <View style={styles.iconWrapper}>
                <Image source={LoginImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                { title }
            </Text>
        </TouchableOpacity>
    );
}