import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useContext, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import closeIcon from '../../assets/close-icon.svg';
import UserContext from '../../Contexts/UserContext';
import './styles.css';

const defaultValuesForm = {
    description: '',
    date: '',
    status: ''
}

function ModalStorage () {
    const { 
        open, 
        setOpen,
        currentTask
    } = useContext(UserContext);

    const [form, setForm] = useState(defaultValuesForm);

    useEffect(() => {
        if(open && !currentTask) {
            setForm(defaultValuesForm);
            return
        }

        if(currentTask) {
            setForm({
                date: format(new Date(currentTask.date), 'dd/MM/yyyy'),
                description: currentTask.description,
                status: currentTask.status
            })
        }
    },[currentTask, open])

    function handleChange (target) {
        setForm({...form, [target.name]: target.value});
    }

    async function updateTask (body) {
        return await fetch(`http://localhost:3334/tasks/${currentTask.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }

    async function registerTask (body) {
        return await fetch('http://localhost:3334/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
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

        if(currentTask) {
            await updateTask(body);
            setOpen(false);
            return;
        }

        await registerTask(body);
        setOpen(false);

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
                <h3>{!currentTask ? "Adicionar" : "Editar"} Tarefa</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Descri????o</label>
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
                                placeholder="Fazer, Fazendo ou Feito?"
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