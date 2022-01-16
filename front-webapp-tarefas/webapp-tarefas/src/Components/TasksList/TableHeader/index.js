import { useEffect, useState } from 'react';
import ArrowDown from '../../../assets/arrow-down.svg';
import ArrowUp from '../../../assets/arrow-up.svg';
import './styles.css';
import { orderColumnAsc, orderColumnDesc } from './utils';

function TableHeader ({ tasks, handleOrderTasks }) {
    const [filter, setFilter] = useState('date');
    const [order, setOrder] = useState('asc');

    useEffect(() => {
        if(order === 'desc') {
            orderAllTasksByDesc();
            return;
        }

        orderAllTasksByAsc();

    },[filter, order]);

    function orderAllTasksByAsc () {
        const localTask = [...tasks];
        localTask.sort((a, b) => orderColumnAsc(a, b, filter));

        handleOrderTasks(localTask);
    }

    function orderAllTasksByDesc () {
        const localTask = [...tasks];
        localTask.sort((a, b) => orderColumnDesc(a, b, filter));

        handleOrderTasks(localTask);
    }

    function handleChangeFilter(type) {
        if(filter === type) {
            setOrder(order === 'asc' ? 'desc' : 'asc');
            return;
        }
        setFilter(type);
    }

    return (
        <div className="table-head">
            <div 
                className="column-title cursor-pointer"
                onClick={() => handleChangeFilter('date')}
            >
               <span> Data</span>
               {filter === 'date' &&
                     <img 
                     src={order === 'asc' ? ArrowUp : ArrowDown} 
                     alt="apply filter"
                 />
               }
            </div>
            <div 
                className="column-title cursor-pointer"
                onClick={() => handleChangeFilter('weekDay')}
            >
                <span>Dia da Semana</span>
                {filter === 'weekDay' &&
                     <img 
                     src={order === 'asc' ? ArrowUp : ArrowDown} 
                     alt="apply filter"
                 />
               }
            </div>
            <div className="column-title">
                <span>Descrição</span>
            </div>
            <div className="column-title">
                <span>Status</span>
            </div>
            <div className="column-title"></div>
        </div>
    )
}

export default TableHeader;