import { useContext, useState } from 'react';
import deleteIcon from '../../assets/delete-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import UserContext from '../../Contexts/UserContext';
import './styles.css';
import TableHeader from './TableHeader';
import { formatToDate, capitalizeWord } from '../../utils/formater_utils'
import ConfirmChoose from '../ConfrimChoose';

function TasksList() {
    
    const { 
        tasks, 
        setCurrentTask,
        reload,
        setReload
    } = useContext(UserContext);

    const [idItemDelete, setIdItemDelete] = useState(null);

    async function handleDeleteItem () {
        await fetch(`http://localhost:3334/tasks/${idItemDelete}`, {
            method: 'DELETE'
        });
        setIdItemDelete(null);
        setReload(!reload);
    }

    return (
        <div className="table">
            <TableHeader />
            <div className="table-body">
                {tasks.map((item) => (
                    <div className="table-line" key={item.id}>
                    <div className="line-itens">
                        {formatToDate(item.date)}   
                    </div>
                    <div className="line-itens">
                        {capitalizeWord(item.week_day)}   
                    </div>
                    <div className="line-itens">
                        {item.description}   
                    </div>
                    <div className="line-itens">
                        {item.status}   
                    </div>
                    <div className="line-itens cursor-pointer">
                        <img 
                            src={editIcon} 
                            alt="edit icon"
                            className="action-button"
                            onClick={() => setCurrentTask(item)} 
                        />
                        <img 
                            src={deleteIcon} 
                            alt="delete icon"
                            className="action-button"
                            onClick={() => setIdItemDelete(item.id)}  
                        />
                        <ConfirmChoose 
                            show={item.id === idItemDelete}
                            setClose={() => setIdItemDelete(null)}
                            message='Apagar item?'
                            handleConfirm={() => handleDeleteItem()}
                        />   
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default TasksList;