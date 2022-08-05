import Botao from "../Botao";
import Relogio from "./Relogio/Relogio";
import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/date";
import Tarefa from "../../types/tarefas";
import { useEffect, useState } from "react";

interface Props {
    selecionado: Tarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props ){

    //console.log( tempoParaSegundos("01:30:05") )

    const [tempo, setTempo] = useState<number>()
    
    useEffect( () => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    function regressiva( contador: number = 0 ){
        setTimeout(() => {
            if( contador > 0 ){
                setTempo(contador - 1)
                return regressiva( contador - 1)
            }
            finalizarTarefa()

        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card para iniciar o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo)}>Começar</Botao>
        </div>
    )
}