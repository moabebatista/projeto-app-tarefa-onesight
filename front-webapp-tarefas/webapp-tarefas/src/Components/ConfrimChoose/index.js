import './styles.css';

function ConfirmChoose ({ show, setClose, message, handleConfirm }) {
    return (
        <>
            {show &&
                <div>
                    <div></div>
                    <span>{message}</span>
                    <button onClick={() => handleConfirm()}>
                        Sim
                    </button>
                    <button onClick={() => setClose()}>
                        Não
                    </button>
                </div>
            }
        </>
    )
}

export default ConfirmChoose;