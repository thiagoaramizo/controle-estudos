import Tarefa from '../../../types/tarefas'
import style from './Item.module.scss'

interface Props extends Tarefa {
    selecionaTarefa: (tarefaSelecionada: Tarefa) => void
}

export default function Item(
    { 
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa
    }: Props) {
    return (
        <li 
            className={ `${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}` }
            onClick={() => !completado && selecionaTarefa(
                {
                    tarefa, 
                    tempo, 
                    selecionado, 
                    completado, 
                    id
                }
        )}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido}></span>}
        </li>
    )
}