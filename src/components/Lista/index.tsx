import React from "react";
import Item from "./Item/Item";
import style from './Lista.module.scss'

function Lista() {
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '01:00:00'
        },
        {
            tarefa: 'Javascrip',
            tempo: '01:30:00'
        }
    ]
    console.log('oi')
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                { tarefas.map( (item, index) => (
                    <Item 
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                        key={index}
                    />
                )) }   
            </ul>
        </aside>
    )
}

export default Lista