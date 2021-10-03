import React from "react";
import { 
    View, 
    Text,
    Image,
  } from 'react-native';
import IllustrationImg from '../../assets/logolife.png';
import Flag from '../../assets/flag.png'
import { styles } from './styles';
import Twitter from '../../assets/twitter.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';

import { useNavigation } from '@react-navigation/native';

import { ButtonExit } from "../../components/ButtonExit";

const Separator = () => (
    <View style={styles.separator} />
  );

export function Home() {
    const navigation = useNavigation();

    function handleCourse() {
        navigation.navigate('Course');
      }

    return (
        <View style={styles.container}>
            <Image 
                source={ IllustrationImg } 
                style={styles.image} 
                resizeMode="stretch"
            />

        <View style={styles.content}>
            <View style={styles.politcs}>
                <Text>Politica de privacidade e Termos de uso </Text>
                <Image
                    source={ Flag }
                    style={styles.icon}                
                />
            </View>

            <Separator />

            <View style={styles.web}>
                <Text>Visite nosso site</Text>
                <Image
                    source={ Flag }
                    style={styles.icontwo}                
                />
            </View>

        </View>

        <ButtonExit 
            title="Sair do Aplicativo"
            activeOpacity={0.7}
            onPress={handleCourse}
        />

        <View>
            <Text style={styles.textredes}>Siga o Life Up nas redes sociais:</Text>

            <View style={styles.social}>
                <Image source={ Twitter } />
                <Image source={ Facebook } />
                <Image source={ Instagram } />
            </View>
        </View>

        </View>
    );
}