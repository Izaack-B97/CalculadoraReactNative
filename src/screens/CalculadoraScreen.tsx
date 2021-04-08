import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
    
    const {
        numero,
        numeroAnterior,
        limpiar,
        masMenos,
        btnDividir,
        btnMultiplicar,
        btnSumar,
        btnRestar,
        btnDelete,
        calcular,
        armarNumero,
    } = useCalculadora();
    
    return (
        <View style={ styles.calculadoraContainer }>
            {
                numeroAnterior !== '0' && <Text style={ styles.resultadoPequeno }>{ numeroAnterior }</Text>   
            }

            <Text style={ styles.resultado } numberOfLines={ 1 } adjustsFontSizeToFit>{ numero }</Text>

            <View style={ styles.fila }>
                <BotonCalc texto='C' color='#9B9B9B' action={ limpiar }/>
                <BotonCalc texto='+/-' color='#9B9B9B' action={ masMenos }/>
                <BotonCalc texto='del' color='#9B9B9B' action={ btnDelete }/>
                <BotonCalc texto='/'  color='#FF9427' action={ btnDividir }/>                
            </View>

            
            <View style={ styles.fila }>
                <BotonCalc texto='7' action={ armarNumero }/>
                <BotonCalc texto='8' action={ armarNumero }/>
                <BotonCalc texto='9' action={ armarNumero }/>
                <BotonCalc texto='x'  color='#FF9427' action={ btnMultiplicar }/>                
            </View>

            <View style={ styles.fila }>
                <BotonCalc texto='4' action={ armarNumero }/>
                <BotonCalc texto='5' action={ armarNumero }/>
                <BotonCalc texto='6' action={ armarNumero }/>
                <BotonCalc texto='-'  color='#FF9427' action={ btnRestar }/>                
            </View>

            <View style={ styles.fila }>
                <BotonCalc texto='1' action={ armarNumero }/>
                <BotonCalc texto='2' action={ armarNumero }/>
                <BotonCalc texto='3' action={ armarNumero }/>
                <BotonCalc texto='+'  color='#FF9427' action={ btnSumar }/>                
            </View>

            <View style={ styles.fila }>
                <BotonCalc texto='0' action={ armarNumero } ancho/>
                <BotonCalc texto='.' action={ armarNumero }/>
                <BotonCalc texto='='  color='#FF9427' action={ calcular }/>                
            </View>

        </View>
    )
}
