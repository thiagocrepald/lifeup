import React from "react";
import { 
    View, 
    Text,
    Image,
  } from 'react-native';
import { styles } from './styles';

export function CourseDetail() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Curso Conheça sua Saúde
            </Text>

            <Text style={styles.subtitle}>
                Aula 4 - Vitamina B12
            </Text>

            <View style={styles.coursevideo}>
                <Image
                    source={require('../../assets/capavideo.png')} >
                </Image>

                <Text style={styles.namedescription}>
                    Aqui vai o resumo do conteúdo da aula, por exemplo: {"\n"}
                    Vasos que trabalham constantemente sob altas pressões adoecem 
                    mais com infarto e AVC, por exemplo
                </Text>
            </View>
        
            <View style={styles.progress}>
                <Text style={styles.textprog}>
                    Progresso no curso
                </Text>
                <Image 
                    source={require('../../assets/progress.png')} 
                    style={styles.imgprog}>
                </Image>
            </View>

            <View style={styles.smallAcord}>
                <Text>Módulo 1</Text>
                <Text style={styles.intro}>
                {"\n"} Introdução
                </Text>

                <Image style={styles.module}
                    source={require('../../assets/ripper.png')} >
                </Image>
            </View>

            <View style={styles.modules}>
                <Image
                    style={styles.thumb}
                    source={require('../../assets/thumb.png')}>                    
                </Image>
                <Text style={styles.titlemodules}>Açúcar no Sangue</Text>
                <Text style={styles.timemodule}>
                    {"\n"} Aula 1 (2:15)
                </Text>
                <Image
                    style={styles.check}
                    source={require('../../assets/check.png')}>
                </Image>
            </View>  

            <View style={styles.statuscourse}>
                <View style={styles.modulesstatus}>
                    <Image
                        style={styles.thumbstatus}
                        source={require('../../assets/thumb.png')}>                    
                    </Image>
                    <Text style={styles.titlemodulesstatus}>Açúcar no Sangue</Text>
                    <Text style={styles.timemodulestatus}>
                        {"\n"} Aula 1 (2:15)
                    </Text>
                    <Image
                        style={styles.check}
                        source={require('../../assets/check.png')}>
                    </Image>
                </View>
            </View>


            <View style={styles.tabs}>
                <View style={styles.square} >
                    <Image 
                        source={require('../../assets/minhasaude.png')}
                    />
                </View>
                <View style={styles.square} > 
                    <Image 
                        source={require('../../assets/habitos.png')}
                    />
                </View>
                <View style={styles.square} > 
                    <Image 
                        source={require('../../assets/recursos.png')}
                    />
                </View>
                <View style={styles.square} > 
                    <Image 
                        source={require('../../assets/configuracoes.png')}
                    />
                </View>
            </View>


        </View>
    );
}