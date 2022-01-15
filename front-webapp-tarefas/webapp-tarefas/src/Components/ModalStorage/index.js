import './styles.css';
import closeIcon from '../../assets/close-icon.svg'
import { useState, useContext, useEffect } from 'react';
import UserContext from '../../Contexts/UserContext'
import InputMask from 'react-input-mask';
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale';

const defaultValuesForm = {
    description: '',
    date: '',
    status: 'Fazer'
}

function ModalStorage () {
    const { open, setOpen } = useContext(UserContext);

    const [form, setForm] = useState(defaultValuesForm);

    useEffect(() => {
        if(open) {
            setForm(defaultValuesForm);
        }
    }, [open])

    function handleChange (target) {
        setForm({...form, [target.name]: target.value});
    }

    async function handleSubmit (event) {
        event.preventDefault();

        const [day, month, year] = form.date.split('/');

        const selectedDate = new Date(`${month}/${day}/${year}`);

        const body = {
            date: selectedDate,
            week_day: format(selectedDate, 'eee', {
                locale: ptBR
            }),
            description: form.description,
            status: form.status
        }

        const response = await fetch('http://localhost:3334/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        await response.json();

        setOpen(false)

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
                    <form onSubmit={handleSubmit}>
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
                            <InputMask
                                mask="99/99/9999"
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