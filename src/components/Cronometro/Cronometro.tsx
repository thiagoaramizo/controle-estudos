import Botao from "../Botao";
import Relogio from "./Relogio/Relogio";
import style from "./Cronometro.module.scss"

export default function Cronometro(){
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card para iniciar o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>Começar</Botao>
        </div>
    )
}