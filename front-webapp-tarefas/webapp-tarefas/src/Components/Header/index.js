import './styles.css';
import blocodetarefa from '../../assets/blocodetarefa.png'

function Header () {
    return (
        <header className="container--header">
            <img src={blocodetarefa} alt="bloco de tarefa" />
            <h1>Tarefas</h1>
        </header>
    );
}

export default Header;