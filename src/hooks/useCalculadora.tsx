import { useRef, useState } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir
};

export const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = ( numeroTexto: string ) => {

        if ( numero.includes('.') && numeroTexto === '.') return;

        if ( numero.startsWith('0') || numero.startsWith('-0')) {
            
            if ( numeroTexto === '.' ) {
                setNumero( numero + '.');
            } else if ( numeroTexto === '0' && numero.includes('.') ) {
                setNumero( numero + numeroTexto );
            } else if ( numeroTexto !== '0' && !numero.includes('.')) {
                setNumero( numeroTexto );
            } else if ( numeroTexto === '0' && !numeroAnterior.includes('.') ) {
                setNumero( numero );
            } else {
                setNumero( numero + numeroTexto );
            }

        } else {
            setNumero( numero + numeroTexto );
        }

    }

    const btnDelete = () => {
        if ( numero.length > 1 ) {
            if ( numero.length === 2 && (numero.includes('-') || numero.includes('.'))) {
                setNumero('0');
            } else if( numero.length === 3 && numero.includes('.') ) {
                setNumero('0');
            } else {
                setNumero( numero.substr(0, numero.length - 1) )
            } 
        } else {
            setNumero('0');
        }
    }

    const masMenos = () => {
        if ( numero.includes('-') ) {
            setNumero( numero.replace( '-', '' ) );
        } else {
            setNumero( '-' + numero );
        }
    }

    const cambiarNumeroPorAnterior = () => {
        if ( numero.endsWith('.') ) {
            setNumeroAnterior( numero.slice(0,-1) );
        } else {
            setNumeroAnterior( numero );
        }

        setNumero('0');
    }
    

    const btnSumar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.sumar
    }

    const btnRestar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.restar
    }

    const btnDividir = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.dividir
    }

    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar
    }
    

    const calcular = () => {
        const num1 = Number( numero );
        const num2 = Number( numeroAnterior );

        switch ( ultimaOperacion.current ) {
            case Operadores.sumar:
                setNumero( `${ num1 + num2 }` );
                break;
            case Operadores.restar:
                setNumero( `${ num2 - num1  }` );
                break;
            case Operadores.dividir:
                setNumero( `${ num2 / num1  }` );
                break;
            case Operadores.multiplicar:
                setNumero( `${ num1 * num2  }` );
                break;
        }

        setNumeroAnterior('0');

    }


    return {
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
        armarNumero
    }

}
