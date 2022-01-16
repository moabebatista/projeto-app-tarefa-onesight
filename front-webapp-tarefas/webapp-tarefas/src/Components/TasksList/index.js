import { useContext } from 'react';
import deleteIcon from '../../assets/delete-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import UserContext from '../../Contexts/UserContext';
import './styles.css';
import TableHeader from './TableHeader';
import { formatToDate, capitalizeWord } from '../../utils/formater_utils'

function TasksList() {
    
    const { tasks } = useContext(UserContext);
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
                        <img src={editIcon} alt="edit icon" />
                        <img src={deleteIcon} alt="delete icon" />   
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default TasksList;