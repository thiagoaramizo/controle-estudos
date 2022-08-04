import Tarefa from "../../types/tarefas";
import Item from "./Item/Item";
import style from './Lista.module.scss'

function Lista({ tarefas }: {tarefas: Tarefa[] }) {
    
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
                    />
                )) }   
            </ul>
        </aside>
    )
}

export default Lista