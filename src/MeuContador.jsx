import { useState } from 'react'
import styles from './button.module.css'

export default function MeuContador() {

    const [contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1)
    }

    function diminuir() {
        setContador(contador - 1)
    }

    if (contador > 5) {
        return (
            <div className='container'>
                <div className='textos'>
                    <h2>Valor muito alto</h2>
                    <h1>Meu Contador: {contador}</h1>
                </div>
                
                <div className='botao'>
                    <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
                    <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
                </div>
            </div>
        )
    }

    if (contador < 0) {
        return (
            <div className='container'>
                <div className='textos'>
                    <h2>Valor muito baixo</h2>
                    <h1>Meu Contador: {contador}</h1>
                </div>
                
                <div className='botao'>
                    <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
                    <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
                </div>
            </div>
        )
    }



    return (
        <div className='container'>
            <div className='textos'>
                <h1>Meu Contador: {contador}</h1>
            </div>
            
            <div className='botao'>
                <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
                <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
            </div>
        </div>
    )
}