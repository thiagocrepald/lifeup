import React from "react";
import { 
  View, 
  Text,
  Image,
  TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from '../../assets/logolife.png';
import { styles } from './styles';

export function SignIn(){
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return(
    <View style={styles.container}>

      <Image 
        source={ IllustrationImg } 
        style={styles.image} 
        resizeMode="stretch"
      />

      <TextInput 
        placeholder="Digite seu e-mail"
        style={styles.input}
      />

      <TextInput 
        placeholder="Digite sua senha"
        secureTextEntry={true}
        style={styles.input}
      />
      
      <ButtonIcon 
        title="Acessar Life UP"
        activeOpacity={0.7}
        onPress={handleSignIn}
      />

      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Esqueci minha senha
        </Text>

      </View>
    </View>
  );
}