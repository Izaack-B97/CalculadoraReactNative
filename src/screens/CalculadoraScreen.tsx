import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';

export const CalculadoraScreen = () => {
    
    /**
        #2D2D2D --> Gris oscuro
        #FF9427 --> Naranja
        */
    return (
        <View style={ styles.calculadoraContainer }>
            <Text style={ styles.resultadoPequeno }>1500.00</Text>
            <Text style={ styles.resultado }>1500.00</Text>

            <View style={ styles.fila }>
                <BotonCalc texto='C' color='#9B9B9B' />
                <BotonCalc texto='+/-' color='#9B9B9B' />
                <BotonCalc texto='del' color='#9B9B9B' />
                <BotonCalc texto='/'  color='#FF9427' />                
            </View>

            
            <View style={ styles.fila }>
                <BotonCalc texto='7' />
                <BotonCalc texto='8' />
                <BotonCalc texto='9' />
                <BotonCalc texto='x'  color='#FF9427' />                
            </View>

            <View style={ styles.fila }>
                <BotonCalc texto='4' />
                <BotonCalc texto='5' />
                <BotonCalc texto='6' />
                <BotonCalc texto='-'  color='#FF9427' />                
            </View>

            <View style={ styles.fila }>
                <BotonCalc texto='1' />
                <BotonCalc texto='2' />
                <BotonCalc texto='3' />
                <BotonCalc texto='+'  color='#FF9427' />                
            </View>

            <View style={ styles.fila }>
                <BotonCalc texto='0' ancho/>
                <BotonCalc texto='.' />
                <BotonCalc texto='='  color='#FF9427' />                
            </View>


        </View>
    )
}
