import Tarefa from '../../../types/tarefas'
import style from './Item.module.scss'

export default function Item({ tarefa, tempo, selecionado, completado, id}: Tarefa) {
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}