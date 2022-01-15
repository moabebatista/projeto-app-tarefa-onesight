import './styles.css';
import closeIcon from '../../assets/close-icon.svg'
import { useState, useContext } from 'react';
import UserContext from '../../Contexts/UserContext'

const defaultValuesForm = {
    description: '',
    date: '',
    status: 'Fazer'
}

function ModalStorage () {
    const { open, setOpen } = useContext(UserContext);

    const [form, setForm] = useState(defaultValuesForm);

    function handleChange (target) {
        setForm({...form, [target.name]: target.value});
    }

    return (
        <div className="backdrop">
            <div className="modal-content">
                <img 
                    className="close-icon"
                    src={closeIcon} 
                    alt="close icon" 
                    onClick={() => setOpen(false)}
                />
                <h3>Adicionar Tarefa</h3>
                    <form>
                        <div>
                            <label>Descrição</label>
                            <input
                                type="text"
                                name="description" 
                                value={form.description}
                                onChange={(event) => handleChange(event.target)} 
                            />
                        </div>
                        <div>
                            <label>Data</label>
                            <input
                                type="text"
                                name="date" 
                                value={form.date}
                                onChange={(event) => handleChange(event.target)} 
                            />
                        </div>
                        <div>
                            <label>Status</label>
                            <input
                                type="text"
                                name="status" 
                                value={form.status}
                                onChange={(event) => handleChange(event.target)} 
                            />
                        </div>
                        <div className="container-btn-insert">
                            <button>confirmar</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default ModalStorage;