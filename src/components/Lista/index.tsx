import Tarefa from "../../types/tarefas";
import Item from "./Item/Item";
import style from './Lista.module.scss'


interface Props {
    tarefas: Tarefa[]
    selecionaTarefa: (tarefaSelecionada: Tarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                { tarefas.map( (item, index) => (
                    <Item 
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                        selecionado={item.selecionado}
                        completado={item.completado}
                        id={item.id}
                        key={item.id}
                        selecionaTarefa={selecionaTarefa}
                    />
                )) }   
            </ul>
        </aside>
    )
}

export default Lista