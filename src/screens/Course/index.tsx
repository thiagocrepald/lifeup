import React from "react";
import { 
    View, 
    Text,
    Image,
    ScrollView
  } from 'react-native';
import { styles } from './styles';
import Tabs from '../../assets/tabs.png';
import Tabstwo from '../../assets/tabs2.png';

import { useNavigation } from '@react-navigation/native';

import { ButtonCourse } from '../../components/ButtonCourse/index';

export function Course() {
    const navigation = useNavigation();

    function handleCourse() {
        navigation.navigate('CourseDetail');
      }
    
    return (
        <ScrollView nestedScrollEnabled>
        <View style={styles.container}>
        
        <Image
            source={require('../../assets/capacurso2.png')} 
            style={styles.Image} >
        </Image>
        
        <Text style={styles.subtitle}>
        Entenda o significado dos seus principais marcadores de saúde
        </Text>

        <ButtonCourse
            title="Assistir"
            activeOpacity={0.7}
            onPress={handleCourse}
        />

        <Text style={styles.title}>
            Outros recursos liberados para você
        </Text>

        <View style={styles.tabs}>
            <Image style={styles.tabs}
                source={ Tabs }
            />

            <Image style={styles.tabs}
                source={ Tabstwo }
            />
        </View>
        
        </View>

        </ScrollView>
    );
}