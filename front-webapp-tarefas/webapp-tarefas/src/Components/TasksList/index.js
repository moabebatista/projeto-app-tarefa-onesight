import './styles.css';
import TableHeader from './TableHeader';
import deleteIcon from '../../assets/delete-icon.svg';
import editIcon from '../../assets/edit-icon.svg'

function TasksList() {
    return (
        <div className="table">
            <TableHeader />
            <div className="table-body">
                <div className="table-line">
                    <div className="line-itens">
                        01/02/2022   
                    </div>
                    <div className="line-itens">
                        Terça   
                    </div>
                    <div className="line-itens">
                        Lavar o carro   
                    </div>
                    <div className="line-itens">
                        Fazer   
                    </div>
                    <div className="line-itens cursor-pointer">
                        <img src={editIcon} alt="edit icon" />
                        <img src={deleteIcon} alt="delete icon" />   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TasksList;